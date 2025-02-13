"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Link } from "../navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function Navigation() {
  const t = useTranslations();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  useEffect(function () {
    setTheme("dark");
  }, []);

  return (
    <div className="navbar sticky px-10 top-0 z-10 bg-transparent w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="text-primary btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow text-text"
          >
            <li>
              <a href="#about">{t("About me")}</a>
            </li>
            <li>
              <a href="#projects">{t("My projects")}</a>
            </li>
            <li>
              <a href="#contact">{t("contact me")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="flex gap-3">
          <Link href="/" locale="rs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={pathname == "/rs" ? "3.5rem" : "2rem"}
              height="2.5rem"
              viewBox="0 0 36 36"
            >
              <path fill="#0c4076" d="M0 13h36v10H0z"></path>
              <path
                fill="#eee"
                d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0z"
              ></path>
              <path
                fill="#c6363c"
                d="M36 9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v4h36zM7 13v9.5a5.5 5.5 0 0 0 11 0V13z"
              ></path>
              <path
                fill="#edb92e"
                d="M12.5 7.062c-3.938 0-5.172 1.672-4.844 2.297s1.312 2.234 1.312 2.234s-.312.125 0 .75s1.531.203 3.531.203s3.219.422 3.531-.203s0-.75 0-.75s.984-1.609 1.313-2.234s-.905-2.297-4.843-2.297m-3.438 2.969c-.283.088 0 .953-.1.579c-.082-.309-.4-.438-.4-.266s-.125 0-.094-.312c.031-.313-.062-.5-.25-.766c-.187-.266-.187-.5.048-.657c.234-.156.75-.281.75-.281s.203.891.312 1.094s.312.336.312.336s-.094.148 0 .226s.203.266.203.266s-.343-.281-.405-.219s.078.141.062.25s-.188-.328-.438-.25m3.188.016c-.078.078-.141-.063-.297-.172s-.25-.046-.219.079s-.188.109-.188.297s-.203.109-.203.109s.25-.656-.172-.641c-.239.009-.156.5 0 .672c-.069-.105-.266-.109-.43-.234s.023-.329-.102-.282s-.203.25-.328.297s-.062-.142 0-.297a.186.186 0 0 0-.072-.234s.01-.109.104-.172s.125-.172 0-.297s-.577-.828-.437-1.063c.141-.234.609-.5 1.922-.469c.234 1.078-.125 1.609-.125 1.609s.266.172.344.266c-.188.079-.047.157.078.266s.203.188.125.266m2.438-.172c.062.156.125.344 0 .297s-.203-.25-.328-.297s.062.157-.102.282s-.36.129-.43.234c.156-.172.239-.663 0-.672c-.422-.016-.172.641-.172.641s-.203.078-.203-.109s-.219-.172-.188-.297s-.062-.188-.219-.079c-.156.109-.219.25-.297.172s0-.156.125-.266c.126-.109.267-.187.079-.265c.078-.094.344-.266.344-.266s-.359-.531-.125-1.609c1.312-.031 1.781.234 1.922.469s-.312.938-.438 1.062s-.094.234 0 .297s.104.172.104.172s-.135.078-.072.234m2.093-.609c-.188.266-.281.453-.25.766c.031.312-.094.484-.094.312s-.318-.042-.4.266c-.1.374.183-.49-.1-.579c-.25-.078-.578.672-.5.594s.188-.531.125-.594c-.062-.063-.406.219-.406.219s.109-.188.203-.266s0-.226 0-.226s.203-.133.312-.336s.312-1.094.312-1.094s.516.125.75.281s.236.391.048.657"
              ></path>
              <path
                fill="#ffac33"
                d="M12.609 7.242a.18.18 0 0 1-.18.18a.18.18 0 0 1-.18-.18V5.664a.18.18 0 0 1 .18-.18a.18.18 0 0 1 .18.18z"
              ></path>
              <path
                fill="#edb92e"
                d="M12.969 6.086a.163.163 0 0 1-.164.164h-.781a.163.163 0 0 1-.164-.164c0-.091.073-.164.164-.164h.781c.091 0 .164.073.164.164"
              ></path>
              <path
                fill="#0c4076"
                d="M13.016 7.062a.602.602 0 1 1-1.204 0a.602.602 0 0 1 1.204 0m-3.412 5.214c0 .147-.169.266-.378.266s-.378-.119-.378-.266c0-.146.169-.265.378-.265s.378.118.378.265"
              ></path>
              <path
                fill="#c6363c"
                d="M11.125 12.185c0 .147-.169.266-.378.266s-.378-.119-.378-.266c0-.146.169-.265.378-.265c.208 0 .378.119.378.265m3.375 0c0 .147-.169.266-.378.266s-.378-.119-.378-.266c0-.146.169-.265.378-.265c.208 0 .378.119.378.265"
              ></path>
              <path
                fill="#0c4076"
                d="M16.062 12.276c0 .147-.169.266-.378.266s-.378-.119-.378-.266c0-.146.169-.265.378-.265s.378.118.378.265m-3.254-.11c0 .147-.169.266-.378.266s-.378-.119-.378-.266s.169-.265.378-.265s.378.118.378.265"
              ></path>
              <path
                fill="#edb92e"
                d="M10.286 22.562c-.342.776-.378 1.158-.783 1.131c-.406-.027-.692-.096-.692.068c0 .163.645.095.645.095s-.609.26-.489.559c.119.3.645-.381.645-.381s.107.027.31-.137c.203-.163.74-.953.74-.953zm4.412 0c.342.776.378 1.158.783 1.131c.406-.027.692-.096.692.068c0 .163-.644.095-.644.095s.609.26.489.559c-.119.3-.645-.381-.645-.381s-.107.027-.31-.137c-.203-.163-.74-.953-.74-.953z"
              ></path>
              <path
                fill="#fff"
                d="M17.114 15.688c-.176-1.208-1.313-.833-1.796 0s-.9 1.333-1.347.75s-.742-1.208-.096-2l.646-.792c-.092-.479-.479-.375-1.033-.146s-.904.125-.849.375s.258.271.258.271s-.349.34-.441 1.513c-.092-1.173-.441-1.513-.441-1.513s.203-.021.258-.271s-.295-.146-.849-.375s-.941-.333-1.033.146l.646.792c.646.792.351 1.417-.096 2s-.864.146-1.347-.688c-.483-.833-1.621-1.208-1.796 0s.028 3.312.028 3.312s-.111 1.146.111 2.125c.221.979.351 1.854 0 2.604c.387-.104.627-.604.627-.604s-.129.604.111.542s.295-.521.479-.688c.185-.166.333-.541.333-.541s.388-.146 0 .5c.314.021.517-.188.517-.188l.11.584l.185-.312l.092.562l.332-.542l.218.25s.041-1.062.336-.854s.313.896.111 1.312c-.203.416 0 .584 0 .584s-.295.438-.446.688s.078.541.078.541s-.572.854-.413 1.188c.154.32 1.107.524 1.804.539l.006.003l.039-.001l.039.001l.006-.003c.697-.015 1.65-.219 1.804-.539c.16-.333-.413-1.188-.413-1.188s.228-.291.078-.541s-.447-.688-.447-.688s.203-.168 0-.584c-.202-.416-.184-1.104.111-1.312s.335.854.335.854l.218-.25l.332.542l.092-.562l.185.312l.11-.584s.203.208.517.188c-.388-.646 0-.5 0-.5s.148.375.332.542s.24.625.48.688s.111-.542.111-.542s.24.5.627.604c-.35-.75-.221-1.626 0-2.604c.222-.979.111-2.125.111-2.125s.206-2.167.03-3.375"
              ></path>
              <path
                fill="#edb92e"
                d="M11.891 14.312c-.44-.422-1.538-.969-1.902-.891c-.364.079-.656.329-.385.72s.385.375.385.375s.433-.391.621-.172s.031.297-.312.328c-.344.031-.693-.203-.693-.203s.113.406.59.453c.321.312.726.078.93.078s1.156-.312.766-.688m1.131 0c.44-.422 1.538-.969 1.902-.891s.656.328.385.719s-.385.375-.385.375s-.433-.391-.621-.172s-.031.297.312.328c.344.031.693-.203.693-.203s-.113.406-.59.453c-.321.313-.726.079-.93.079s-1.157-.312-.766-.688M9.969 25.199c.137-.316.041-.361-.069-.471a.8.8 0 0 1-.166-.262s-.055.152-.166.262c-.111.109-.207.154-.07.471c-.333-.197-.388.164-.235.383c.043-.197.305-.152.305.088s-.217.131-.191.229c.027.099.225.306.356.306s.33-.207.356-.306c.027-.099-.19.011-.19-.229s.261-.285.305-.088c.154-.219.099-.58-.235-.383m5.438 0c.137-.316.041-.361-.07-.471a.8.8 0 0 1-.166-.262s-.055.152-.166.262c-.111.109-.207.154-.07.471c-.333-.197-.388.164-.235.383c.043-.197.305-.152.305.088s-.217.131-.19.229c.026.099.225.306.356.306s.33-.207.356-.306c.027-.099-.19.011-.19-.229s.261-.285.305-.088c.153-.219.099-.58-.235-.383"
              ></path>
              <path
                fill="#c6363c"
                d="M10.244 16.875v3.859a2.234 2.234 0 0 0 4.468 0v-3.859z"
              ></path>
              <path
                fill="#eee"
                d="M14.712 19.172H12.96v-2.297h-.962v2.297h-1.753v.963h1.753v2.779c.155.034.315.055.481.055s.326-.021.482-.055v-2.779h1.753v-.963z"
              ></path>
            </svg>
          </Link>
          <Link href="/" locale="en">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={pathname == "/en" ? "3.5rem" : "2rem"}
              height="2.5rem"
              viewBox="0 0 64 64"
            >
              <path
                fill="#2e3192"
                d="M38 54h16c1.977 0 3.657-.446 5.052-1.223L38 40.219zm25.66-7.79c.228-1.017.344-2.094.344-3.211v-5h-14.11l13.762 8.211M.35 17.759A14.6 14.6 0 0 0 0 21v5h14.164zM26 10H10c-1.963 0-3.632.44-5.021 1.206L26 23.746zM5.043 52.826C6.419 53.57 8.066 54 10 54h16V40.324zM0 38v5c0 1.151.122 2.26.363 3.303L14.282 38zm59.115-26.745C57.709 10.457 56.006 10 54 10H38v13.851zM64 26v-5c0-1.094-.113-2.149-.332-3.147L50.012 26z"
              ></path>
              <path
                fill="#e6e7e8"
                d="m50.012 26l13.656-8.147c-.626-2.864-2.15-5.235-4.553-6.598L38 23.851V10h-2v18h28v-2zM0 36v2h14.282L.363 46.303c.661 2.855 2.231 5.199 4.68 6.523L26 40.324V54h2V36zm64 0H36v18h2V40.219l21.052 12.559c2.421-1.348 3.964-3.706 4.604-6.566L49.894 38H64zM26 10v13.746L4.979 11.206C2.549 12.546.996 14.9.349 17.759L14.164 26H0v2h28V10z"
              ></path>
              <path
                fill="#be1e2d"
                d="M36 28V10h-8v18H0v8h28v18h8V36h28v-8z"
              ></path>
              <path
                fill="#be1e2d"
                d="M21.938 26L1.888 14.031c-.431.64-.777 1.344-1.063 2.094L17.372 26h4.563M63.09 48.09L46.277 38h-4.656l20.313 12.219a10 10 0 0 0 1.156-2.125m-2.371-35.703L37.969 26l4.619.003L62.219 14.25c-.438-.797-.9-1.311-1.5-1.859M1.813 49.875a9 9 0 0 0 1.609 1.844L26.063 38H21.5z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <button
          onChange={() => {
            if (theme == "dark") setTheme("light");
            if (theme == "light") setTheme("dark");
          }}
        >
          <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="sm:w-20 w-10 h-8 pt-1 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
          </label>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
