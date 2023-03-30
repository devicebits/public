window.addEventListener("message", function (e) {
    if (e.data.type === "locationChange") {
        window.history.pushState({
            path: e.data.value.pathname,
            search: e.data.value.search
        }, '', e.data.value.pathname + e.data.value.search);
    }

},
    false
);
