System.register(['./^vehicle', './^vehicle-list', './common', './vehicles.component'], function(exports_1, context_1) {
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
            function (_vehicle_1_1) {
                exportStar_1(_vehicle_1_1);
            },
            function (_vehicle_list_1_1) {
                exportStar_1(_vehicle_list_1_1);
            },
            function (common_1_1) {
                exportStar_1(common_1_1);
            },
            function (vehicles_component_1_1) {
                exportStar_1(vehicles_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map