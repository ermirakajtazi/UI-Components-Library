import React, { useEffect, useState } from "react";
import { ITrustpoiletProps } from "./Trustpoilet.types";

const Trustpoilet = ({
	lang
}: ITrustpoiletProps) => {
  const ref = React.useRef(null);
  const [lngCode, setLngCode] = useState<string>();

  const lngCodes: {
    [key: string]: string;
  } = {
	en: "en-GB",
    en_GB: "en-GB",
	en_US: "en-US",
    fr: "fr-FR",
    it: "it-IT",
	de: "de-DE",
	es: "es-ES",
  };

  useEffect(() => {
	const options = {
		locale: lngCodes[lang],
	};
	setLngCode(lngCodes[lang])
	if ((window as any).Trustpilot) {
		(window as any).Trustpilot.loadFromElement(ref.current, options);
	}

    const script = document.createElement("script");
    script.src =
      "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);
    if ((window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(ref.current, true);
    }
  }, [lang, lngCode]);

  return (
    <>
      <div className="container mx-auto text-white h-40">
        <div
          ref={ref}
          className="trustpilot-widget text-white  pt-4"
          data-locale={lngCode}
          data-template-id="53aa8912dec7e10d38f59f36"
          data-businessunit-id="61923c7d87db35001f757d59"
          data-style-color="white"
          data-theme="light"
		  data-test-id='trustpoilot-widget'
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.trustpilot.com/review/twigcard.com"
          >
            {" "}
          </a>
        </div>
      </div>
    </>
  );
};
export default Trustpoilet;
