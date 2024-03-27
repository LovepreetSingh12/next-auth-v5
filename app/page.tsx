"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div className="flex flex-col items-center">
      <Button size="lg" variant="outline" onClick={handleClick}>
        Click Me
      </Button>
      <p>{count}</p>
    </div>
  );
}
