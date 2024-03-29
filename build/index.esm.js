import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".storybook-button {\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    border: 0;\n    border-radius: 3em;\n    cursor: pointer;\n    display: inline-block;\n    line-height: 1;\n}\n.storybook-button--primary {\n    color: white;\n    background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n    color: #333;\n    background-color: transparent;\n    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n    font-size: 12px;\n    padding: 10px 16px;\n}\n.storybook-button--medium {\n    font-size: 14px;\n    padding: 11px 20px;\n}\n.storybook-button--large {\n    font-size: 16px;\n    padding: 12px 24px;\n}\n";
styleInject(css_248z);

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? true : _b, backgroundColor = _a.backgroundColor, _c = _a.size, size = _c === void 0 ? "medium" : _c, onClick = _a.onClick, label = _a.label;
    var mode = primary
        ? "storybook-button--primary"
        : "storybook-button--secondary";
    return (React.createElement("button", { type: "button", className: ["storybook-button", "storybook-button--" + size, mode].join(" "), style: backgroundColor ? { backgroundColor: backgroundColor } : {}, onClick: onClick }, label));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
