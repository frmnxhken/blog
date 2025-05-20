import React from "react";

export const customRenderers = {
  list: ({ data }) => {
    const { style, items } = data;

    const normalizedItems = items.map((item) =>
      typeof item === "string" ? item : item?.content || ""
    );

    if (style === "ordered") {
      return (
        <ol className="list-decimal ml-6">
          {normalizedItems.map((item, idx) => (
            <li key={idx} className="mb-1">
              {item}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <ul className="list-disc ml-6">
        {normalizedItems.map((item, idx) => (
          <li key={idx} className="mb-1">
            {item}
          </li>
        ))}
      </ul>
    );
  },
};
