// App.tsx
import { framer, Draggable } from "framer-plugin";
import "./App.css";

framer.showUI({
  position: "top right",
  width: 240,
  height: 95,
  resizable: true,
});

export function App() {
  const navBarURL =
    "https://framer.com/m/navbar-Simple-Topbar-0PiY.js@ejyoG8KRkJz02LSus0KU";

  const navBarDragData = {
    type: "componentInstance",
    url: navBarURL,
    attributes: {
      name: "Navbar",
    },
  };

  const heroURL = "https://framer.com/m/Hero-EzMh.js@Vq7KinjkRjYZLixdCHHM";

  const heroDragData = {
    type: "componentInstance",
    url: heroURL,
    attributes: {
      name: "Hero",
    },
  };

  const footerURL = "https://framer.com/m/Footer-bZ9X.js@5X7H61dUhusmsaqcUx6M";

  const footerDragData = {
    type: "componentInstance",
    url: footerURL,
    attributes: {
      name: "Footer",
    },
  };

  const textStylesURL =
    "https://framer.com/m/texts-oB98.js@5LVeZBTN6FIWutiBmStz";

  const textStylesDragData = {
    type: "componentInstance",
    url: textStylesURL,
    attributes: {
      name: "Text Styles",
    },
  };

  const colorStylesURL =
    "https://framer.com/m/color-xeIT.js@YnO3TsADa9zY43FnPLYp";

  const colorStylesDragData = {
    type: "componentInstance",
    url: colorStylesURL,
    attributes: {
      name: "Color Styles",
    },
  };

  return (
    <main>
      <h1>Segment UI</h1>
      <Draggable data={navBarDragData}>
        <button className="framer-button-primary">Navbar</button>
      </Draggable>
      <Draggable data={heroDragData}>
        <button className="framer-button-primary">Hero</button>
      </Draggable>
      <Draggable data={footerDragData}>
        <button className="framer-button-primary">Footer</button>
      </Draggable>
      <Draggable data={textStylesDragData}>
        <button className="framer-button-primary">Text Styles</button>
      </Draggable>
      <Draggable data={colorStylesDragData}>
        <button className="framer-button-primary">Color Styles</button>
      </Draggable>
    </main>
  );
}
