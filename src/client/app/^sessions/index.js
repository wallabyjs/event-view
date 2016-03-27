System.register(['./^session', './^session-list', './common', './sessions.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (_session_1_1) {
                exportStar_1(_session_1_1);
            },
            function (_session_list_1_1) {
                exportStar_1(_session_list_1_1);
            },
            function (common_1_1) {
                exportStar_1(common_1_1);
            },
            function (sessions_component_1_1) {
                exportStar_1(sessions_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map