# Parking Lot Implemenation
A typescript implementation for Node.js

### Setup and execution guide
Assuming you already have [`Node.js`](https://nodejs.org/), [`Ruby`](https://www.ruby-lang.org/en/) and [`Bundler`](https://bundler.io/) installed,


1. Install Node dependencies, run [`jest`](https://jestjs.io/) test suites and transpile TS to `/dist`
```sh
$  bin/setup
```

2. Run program passing the input file at `/file_inputs.txt`
```sh
$  bin/parking_lot file_inputs.txt
```

3. Run program passing the command line 
```sh
$  bin/parking_lot {press enter and type command line eg. create_parking_lot 5}
```