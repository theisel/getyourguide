// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import type { InputProps } from "sanity";
import type { GetYourGuideCityValue } from "./types";

import { useEffect, useState } from "react";
import { useFormValue } from "sanity";
import { Box, Tab, TabList, TabPanel } from "@sanity/ui";
import { EditIcon, EyeOpenIcon, EyeClosedIcon } from "@sanity/icons";
import type { CityAttrs } from "gyg-wc/types";

import "gyg-wc";

export default function GetYourGuideCityWidget(props: InputProps) {
  const [view, setView] = useState<"content" | "preview">("content");
  const value = useFormValue(props.path) as GetYourGuideCityValue | undefined;
  const [cityId, setCityId] = useState<string | undefined>(value?.cityId);
  const { partnerId, lang } = props.schemaType.options ?? {};

  useEffect(() => {
    const timer = setTimeout(() => setCityId(value?.cityId), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [value?.cityId]);

  const widgetAttrs = {
    widget: "city",
    "partner-id": partnerId,
    "city-id": cityId ?? "",
  } satisfies CityAttrs;

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

      <TabPanel aria-labelledby="content-tab" hidden={view === "preview"} id="content-panel">
        <Box marginTop={3}>{props.renderDefault(props)}</Box>
      </TabPanel>

      <TabPanel aria-labelledby="preview-tab" hidden={view === "content"} id="preview-panel">
        <Box marginTop={3}>
          <gyg-widget {...widgetAttrs} lang={lang}>
            <a href={value?.url} target="_blank" rel="noopener noreferrer">
              {value?.title}
            </a>
          </gyg-widget>
        </Box>
      </TabPanel>
    </>
  );
}
