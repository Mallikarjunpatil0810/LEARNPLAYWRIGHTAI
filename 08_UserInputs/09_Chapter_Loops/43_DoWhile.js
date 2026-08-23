let retry = 0;

do {
    console.log("Execute code");
    console.log("retrying", retry); 
    retry++;
} while (retry < 3);

