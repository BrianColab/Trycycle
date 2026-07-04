"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { CareerDrawer } from "@/components/CareerDrawer";

export function ApplyButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="md" onClick={() => setOpen(true)}>
        Send a General Application
      </Button>
      <CareerDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
