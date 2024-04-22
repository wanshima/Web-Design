const menu = [
    { name: "Home", path: "home" },
    { name: "Impact", path: "impact" },
    {
        name: "Arts & Stories",
        path: "art",
        submenu: [
            { name: "Biography", path: "biography" },
            { name: "Legacy", path: "legacy" },
            { name: "Gallery", path: "gallery" }
        ]
    },
];
export default menu;