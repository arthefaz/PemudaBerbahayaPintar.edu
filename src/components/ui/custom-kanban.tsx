"use client";

import React, { useState } from "react";
import { Plus, Trash2, Flame } from "lucide-react";
import { motion } from "framer-motion";

export const CustomKanban = () => {
  return (
    <div className="h-[600px] w-full bg-background text-foreground rounded-2xl border border-border shadow-sm overflow-hidden">
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-x-auto p-8">
      <Column
        title="Belum Dimulai"
        column="backlog"
        headingColor="text-muted-foreground"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Akan Dikerjakan"
        column="todo"
        headingColor="text-yellow-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Sedang Berjalan"
        column="doing"
        headingColor="text-blue-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Selesai"
        column="done"
        headingColor="text-emerald-500"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column = ({ title, headingColor, cards, column, setCards }: any) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: any, card: any) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: any) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: any) => {
    const indicators = els || getIndicators();

    indicators.forEach((i: any) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: any) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e: any, indicators: any) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest: any, child: any) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c: any) => c.column === column);

  return (
    <div className="w-56 shrink-0 flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-bold ${headingColor}`}>{title}</h3>
        <span className="rounded bg-muted px-2 py-1 text-sm text-muted-foreground font-medium">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex-1 w-full transition-colors rounded-lg ${
          active ? "bg-muted/50" : "bg-transparent"
        }`}
      >
        {filteredCards.map((c: any) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const Card = ({ title, id, column, handleDragStart }: any) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e: any) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded-lg border border-border bg-card p-4 active:cursor-grabbing shadow-sm hover:shadow-md transition-shadow"
      >
        <p className="text-sm font-medium text-card-foreground">{title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }: any) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-1 h-1 w-full bg-primary rounded-full opacity-0 transition-opacity"
    />
  );
};

const BurnBarrel = ({ setCards }: any) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e: any) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv: any) => pv.filter((c: any) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded-xl border-2 border-dashed text-3xl transition-colors ${
        active
          ? "border-destructive bg-destructive/10 text-destructive"
          : "border-border bg-muted/20 text-muted-foreground"
      }`}
    >
      {active ? <Flame className="animate-bounce w-8 h-8" /> : <Trash2 className="w-8 h-8" />}
    </div>
  );
};

const AddCard = ({ column, setCards }: any) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv: any) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Tambah tugas baru..."
            className="w-full rounded-lg border border-primary bg-primary/5 p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            rows={3}
          />
          <div className="mt-2 flex items-center justify-end gap-2">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              type="button"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <span>Tambah</span>
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50 rounded-lg mt-2"
        >
          <span>Tambah Kartu</span>
          <Plus className="w-4 h-4" />
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Baca Modul Sejarah Pergerakan Nasional", id: "1", column: "backlog" },
  { title: "Cari referensi untuk tugas essay", id: "2", column: "backlog" },
  { title: "Diskusi kelompok persiapan debat", id: "3", column: "backlog" },
  
  // TODO
  { title: "Kerjakan Kuis Pancasila Dasar Negara", id: "5", column: "todo" },
  { title: "Review materi UUD 1945", id: "6", column: "todo" },

  // DOING
  { title: "Merangkum Modul 3: Demokrasi Indonesia", id: "8", column: "doing" },
  
  // DONE
  { title: "Mengerjakan Kuis Bela Negara", id: "10", column: "done" },
];
