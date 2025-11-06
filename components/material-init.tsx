"use client";

import { useEffect } from "react";

// Import Material Web components (tree-shaken by bundler).
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/button/filled-tonal-button.js";
import "@material/web/icon/icon.js";
import "@material/web/iconbutton/icon-button.js";
import "@material/web/labs/navigationdrawer/navigation-drawer.js";
import "@material/web/list/list.js";
import "@material/web/list/list-item.js";
import "@material/web/labs/card/elevated-card.js";

export function MaterialInit() {
  // Ensure this component participates in React tree; no runtime work needed.
  useEffect(() => {
    // No-op hook keeps this component client-only.
  }, []);

  return null;
}
