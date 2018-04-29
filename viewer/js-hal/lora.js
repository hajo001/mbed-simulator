window.MbedJSHal.lora = (function() {
    /**
     * NOTE: THIS USES SYNCHRONOUS XMLHTTPREQUEST!
     *
     * Because the C++ API also expectes sync calls.
     * Yes, this is very dirty.
     */
    var host = window.location.protocol + '//' + window.location.host;

    function sendLoRa(channel, power, bandwidth, datarate, data, size) {
        var buffer = [].slice.call(new Uint8Array(Module.HEAPU8.buffer, data, size));

        console.log('sendLoRa', 'channel', channel, 'power', power, 'bandwidth', bandwidth, 'datarate', datarate, 'buffer', buffer, 'size', size);
    }

    function sendFsk(channel, power, bandwidth, datarate, data, size) {
        var buffer = [].slice.call(new Uint8Array(Module.HEAPU8.buffer, data, size));

        console.log('sendFsk', 'channel', channel, 'power', power, 'bandwidth', bandwidth, 'datarate', datarate, 'buffer', buffer, 'size', size);
    }

    return {
        sendLoRa: sendLoRa,
        sendFsk: sendFsk
    };

})();
