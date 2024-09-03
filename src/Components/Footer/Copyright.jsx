import { Link } from "react-router-dom";
import { X } from "../SVGs/Apps/X";
import { Linkedin } from "../SVGs/Apps/Linkedin";
import { Facebook } from "../SVGs/Apps/Facebook";

export const Copyright = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-3">
      <div className="flex justify-between">
        <div className="flex gap-3 text-zinc-400 text-[15px]">
          <span>@ 2023 Cobalt Financial Technologies Inc.</span>
          <Link
            className="hover:text-zinc-300 duration-200"
            to="/legal/privacy"
          >
            Privacy Policy
          </Link>
          <Link className="hover:text-zinc-300 duration-200" to="/legal/terms">
            Terms of Use
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <X />
          <Linkedin />
          <Facebook />
        </div>
      </div>
      <div className="text-zinc-400 w-4/6 text-sm flex flex-col gap-4 pb-10">
        <p>
          Cobalt is a trademark or registered trademark of Cobalt Financial
          Technologies Inc. Any other trademarks are the property of their
          respective owners. Unless otherwise noted, use of third party logos
          does not imply endorsement of, sponsorship of, or affiliation with
          Cobalt.
        </p>
        <p>
          Cobalt is a financial technology company, not a bank. Banking services
          are provided by Celtic Bank and Evolve Bank & Trust®, Members FDIC.
        </p>
      </div>
    </div>
  );
};
