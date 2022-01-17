function* sieve(s: Iterable<number>): Iterable<number> {
    const iter = s[Symbol.iterator]();
    const { value: p } = iter.next();
    yield p;
    yield* sieve(filter(n => {
        console.error(`${n} % ${p} == ${n % p}`);
        return n % p != 0;
    }, s));
}

function* filter(pass: (n: number) => boolean, s: Iterable<number>) {
    for (const n of s) {
        if (pass(n)) {
            yield n;
        }
    }
}

function* integersFrom(n) {
    while (true) {
        yield n++;
    }
}

for (const p of sieve(integersFrom(2))) {
    console.log(p);
}