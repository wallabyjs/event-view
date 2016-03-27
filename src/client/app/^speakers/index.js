System.register(['./^speaker', './^speaker-list', './speakers.component', './speaker-button', './common'], function(exports_1, context_1) {
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
            function (_speaker_1_1) {
                exportStar_1(_speaker_1_1);
            },
            function (_speaker_list_1_1) {
                exportStar_1(_speaker_list_1_1);
            },
            function (speakers_component_1_1) {
                exportStar_1(speakers_component_1_1);
            },
            function (speaker_button_1_1) {
                exportStar_1(speaker_button_1_1);
            },
            function (common_1_1) {
                exportStar_1(common_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map