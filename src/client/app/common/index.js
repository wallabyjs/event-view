System.register(['./config', './entity.service', './exception.service', './filter-text', './init-caps.pipe', './message.service', './modal', './spinner', './toast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var entity_service_1, exception_service_1, filter_text_1, init_caps_pipe_1, message_service_1, modal_1, spinner_1, toast_1;
    var BLOCK_PROVIDERS;
    var exportedNames_1 = {
        'BLOCK_PROVIDERS': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (config_1_1) {
                exportStar_1(config_1_1);
            },
            function (entity_service_2_1) {
                exportStar_1(entity_service_2_1);
                entity_service_1 = entity_service_2_1;
            },
            function (exception_service_2_1) {
                exportStar_1(exception_service_2_1);
                exception_service_1 = exception_service_2_1;
            },
            function (filter_text_2_1) {
                exportStar_1(filter_text_2_1);
                filter_text_1 = filter_text_2_1;
            },
            function (init_caps_pipe_2_1) {
                exportStar_1(init_caps_pipe_2_1);
                init_caps_pipe_1 = init_caps_pipe_2_1;
            },
            function (message_service_2_1) {
                exportStar_1(message_service_2_1);
                message_service_1 = message_service_2_1;
            },
            function (modal_2_1) {
                exportStar_1(modal_2_1);
                modal_1 = modal_2_1;
            },
            function (spinner_2_1) {
                exportStar_1(spinner_2_1);
                spinner_1 = spinner_2_1;
            },
            function (toast_2_1) {
                exportStar_1(toast_2_1);
                toast_1 = toast_2_1;
            }],
        execute: function() {
            exports_1("BLOCK_PROVIDERS", BLOCK_PROVIDERS = [
                entity_service_1.EntityService,
                exception_service_1.ExceptionService,
                filter_text_1.FilterService,
                init_caps_pipe_1.InitCapsPipe,
                message_service_1.MessageService,
                modal_1.ModalService,
                spinner_1.SpinnerService,
                toast_1.ToastService
            ]);
        }
    }
});
//# sourceMappingURL=index.js.map