import React, { useState } from "react";
import { useFormValue, type InputProps } from "sanity";
import { Box, Tab, TabList, TabPanel } from "@sanity/ui";
import { EditIcon, EyeOpenIcon, EyeClosedIcon } from "@sanity/icons";

import "gyg-wc";

type FormValue = React.JSX.IntrinsicElements["gyg-wc"] & {
  _type: string;
  title: string;
  url: string;
};

export function GetYourGuideForm(props: InputProps) {
  const [view, setView] = useState<"content" | "preview">("content");
  const { _type, title, ...widgetAttrs } = (useFormValue(props.path) ?? {}) as FormValue;
  const { partnerId, lang } = props.schemaType.options ?? {};

  return (
    <>
      <TabList space={2}>
        <Tab
          aria-controls="content-panel"
          icon={EditIcon}
          id="content-tab"
          label="Content"
          onClick={() => setView("content")}
          selected={view === "content"}
        />
        <Tab
          aria-controls="preview-panel"
          icon={view === "preview" ? EyeOpenIcon : EyeClosedIcon}
          id="preview-tab"
          label="Preview"
          onClick={() => setView("preview")}
          selected={view === "preview"}
        />
      </TabList>

      <TabPanel aria-labelledby="content-tab" hidden={view !== "content"} id="content-panel">
        <Box marginTop={3}>{props.renderDefault(props)}</Box>
      </TabPanel>

      <TabPanel aria-labelledby="preview-tab" hidden={view !== "preview"} id="preview-panel">
        <Box marginTop={3}>
          {("query" in widgetAttrs || "url" in widgetAttrs || "urls" in widgetAttrs) && (
            <gyg-wc {...widgetAttrs} partner-id={partnerId} lang={lang}>
              <a href={widgetAttrs.url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </gyg-wc>
          )}
        </Box>
      </TabPanel>
    </>
  );
}
