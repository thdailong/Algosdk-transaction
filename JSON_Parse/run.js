import JSONbig from "json-bigint"

function main() {
    const nativeBigJSON = JSONbig({ useNativeBigInt: true });
    let x = "{\"key0\": 0,\"key1\": \"algo\",\"key2\":{\"key3\": \"teal\", \"key4\": {\"key40\": 10}}, \"key5\": 18446744073709551615 }";
    let json = nativeBigJSON.parse(x);
    console.log(json);
    const y = json["maxUint64"];
    console.log(nativeBigJSON.stringify(json["key2"]["key4"]));
    console.log(typeof json["key1"]);
    console.log(typeof json["key2"] === 'object');
    console.log(BigInt(json["key5"]));
    //console.log(BigInt(json["maxUint64"]));

    //if (typeof y === Int) console.log("yeah");
}

main();