import cssInject from "./CompactSettings.theme.scss";

let uninjectCss;

export function onLoad() {
  uninjectCss = cssInject();
}

export function onUnload() {
  uninjectCss();
}
