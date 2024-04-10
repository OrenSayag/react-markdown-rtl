export const mdToHtml = (md: string): string => {
  if(!md && md!=='') return '';
  const toHTML = md
      .replace(/^### (.*$)/gim, "<h3 style='font-size: 1.5rem; line-height: 2rem;'>$1</h3>") // h3 tag
      .replace(/^## (.*$)/gim, "<h2 style='font-size: 2.25rem; line-height: 2.5rem;'>$1</h2>") // h2 tag
      .replace(/^# (.*$)/gim, "<h1>$1</h1>") // h1 tag
      .replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>") // bold text
      .replace(/\*(.*?)\*/gim, "<i>$1</i>") // italic text
      .replace(/\+\+(.*)\+\+/gim, "<div dir='rtl' style='text-align: right'>$1</div>") // RTL
      .replace(/--(.*)--/gim, "<div dir='ltr' style='text-align: left'>$1</div>") // LTR
      .replace(/~~(.*)~~/gim, "<span style='text-decoration-line: line-through'>$1</span>") // Strike-through
      .replace(/_(.*)_/gim, "<span style='text-decoration-line: underline;'>$1</span>") // Underline
      .replace(/{RED}(.*){RED}/gim, "<span style='color: red;'>$1</span>") // Color - Red
      .replace(/{BLUE}(.*){BLUE}/gim, "<span style='color: blue;'>$1</span>") // Color - Blue
      .replace(/{GREEN}(.*){GREEN}/gim, "<span style='color: green;'>$1</span>") // Color - Green
      .replace(/{YELLOW}(.*){YELLOW}/gim, "<span style='color: yellow;'>$1</span>") // Color - Yellow
      .replace(/\n(.*)/gim, "<br />$1"); // new line
  return toHTML.trim(); // using trim method to remove whitespace
};
