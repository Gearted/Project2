import React from "react";

export default function CardRamdom(a) {
  return a[Math.floor(Math.random() * a.length)];
}
