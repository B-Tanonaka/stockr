const sampleData = [
  {
    name: 'AAPL',
    data: [
      {
        date: '2023-01-03T14:30:00.000Z',
        AAPL: 125.06999969482422,
      },
      {
        date: '2023-01-04T14:30:00.000Z',
        AAPL: 126.36000061035156,
      },
      {
        date: '2023-01-05T14:30:00.000Z',
        AAPL: 125.0199966430664,
      },
      {
        date: '2023-01-06T14:30:00.000Z',
        AAPL: 129.6199951171875,
      },
      {
        date: '2023-01-09T14:30:00.000Z',
        AAPL: 130.14999389648438,
      },
      {
        date: '2023-01-10T14:30:00.000Z',
        AAPL: 130.72999572753906,
      },
      {
        date: '2023-01-11T14:30:00.000Z',
        AAPL: 133.49000549316406,
      },
      {
        date: '2023-01-12T14:30:00.000Z',
        AAPL: 133.41000366210938,
      },
      {
        date: '2023-01-13T14:30:00.000Z',
        AAPL: 134.75999450683594,
      },
      {
        date: '2023-01-17T14:30:00.000Z',
        AAPL: 135.94000244140625,
      },
      {
        date: '2023-01-18T14:30:00.000Z',
        AAPL: 135.2100067138672,
      },
      {
        date: '2023-01-19T14:30:00.000Z',
        AAPL: 135.27000427246094,
      },
      {
        date: '2023-01-20T14:30:00.000Z',
        AAPL: 137.8699951171875,
      },
      {
        date: '2023-01-23T14:30:00.000Z',
        AAPL: 141.11000061035156,
      },
      {
        date: '2023-01-24T14:30:00.000Z',
        AAPL: 142.52999877929688,
      },
      {
        date: '2023-01-25T14:30:00.000Z',
        AAPL: 141.86000061035156,
      },
      {
        date: '2023-01-26T14:30:00.000Z',
        AAPL: 143.9600067138672,
      },
      {
        date: '2023-01-27T14:30:00.000Z',
        AAPL: 145.92999267578125,
      },
      {
        date: '2023-01-30T14:30:00.000Z',
        AAPL: 143,
      },
      {
        date: '2023-01-31T14:30:00.000Z',
        AAPL: 144.2899932861328,
      },
      {
        date: '2023-02-01T14:30:00.000Z',
        AAPL: 145.42999267578125,
      },
      {
        date: '2023-02-02T14:30:00.000Z',
        AAPL: 150.82000732421875,
      },
      {
        date: '2023-02-03T14:30:00.000Z',
        AAPL: 154.5,
      },
      {
        date: '2023-02-06T14:30:00.000Z',
        AAPL: 151.72999572753906,
      },
      {
        date: '2023-02-07T14:30:00.000Z',
        AAPL: 154.64999389648438,
      },
      {
        date: '2023-02-08T14:30:00.000Z',
        AAPL: 151.9199981689453,
      },
      {
        date: '2023-02-09T14:30:00.000Z',
        AAPL: 150.8699951171875,
      },
      {
        date: '2023-02-10T14:30:00.000Z',
        AAPL: 151.00999450683594,
      },
      {
        date: '2023-02-13T14:30:00.000Z',
        AAPL: 153.85000610351562,
      },
      {
        date: '2023-02-14T14:30:00.000Z',
        AAPL: 153.1999969482422,
      },
      {
        date: '2023-02-15T14:30:00.000Z',
        AAPL: 155.3300018310547,
      },
      {
        date: '2023-02-16T14:30:00.000Z',
        AAPL: 153.7100067138672,
      },
      {
        date: '2023-02-17T14:30:00.000Z',
        AAPL: 152.5500030517578,
      },
      {
        date: '2023-02-21T14:30:00.000Z',
        AAPL: 148.47999572753906,
      },
      {
        date: '2023-02-22T14:30:00.000Z',
        AAPL: 148.91000366210938,
      },
      {
        date: '2023-02-23T14:30:00.000Z',
        AAPL: 149.39999389648438,
      },
      {
        date: '2023-02-24T14:30:00.000Z',
        AAPL: 146.7100067138672,
      },
      {
        date: '2023-02-27T14:30:00.000Z',
        AAPL: 147.9199981689453,
      },
      {
        date: '2023-02-28T14:30:00.000Z',
        AAPL: 147.41000366210938,
      },
      {
        date: '2023-03-01T14:30:00.000Z',
        AAPL: 145.30999755859375,
      },
      {
        date: '2023-03-02T14:30:00.000Z',
        AAPL: 145.91000366210938,
      },
      {
        date: '2023-03-03T14:30:00.000Z',
        AAPL: 151.02999877929688,
      },
      {
        date: '2023-03-06T14:30:00.000Z',
        AAPL: 153.8300018310547,
      },
      {
        date: '2023-03-07T14:30:00.000Z',
        AAPL: 151.60000610351562,
      },
      {
        date: '2023-03-08T14:30:00.000Z',
        AAPL: 152.8699951171875,
      },
      {
        date: '2023-03-09T14:30:00.000Z',
        AAPL: 150.58999633789062,
      },
      {
        date: '2023-03-10T14:30:00.000Z',
        AAPL: 148.5,
      },
      {
        date: '2023-03-13T13:30:00.000Z',
        AAPL: 150.47000122070312,
      },
      {
        date: '2023-03-14T13:30:00.000Z',
        AAPL: 152.58999633789062,
      },
      {
        date: '2023-03-15T13:30:00.000Z',
        AAPL: 152.99000549316406,
      },
      {
        date: '2023-03-16T13:30:00.000Z',
        AAPL: 155.85000610351562,
      },
      {
        date: '2023-03-17T13:30:00.000Z',
        AAPL: 155,
      },
      {
        date: '2023-03-20T13:30:00.000Z',
        AAPL: 157.39999389648438,
      },
      {
        date: '2023-03-21T13:30:00.000Z',
        AAPL: 159.27999877929688,
      },
      {
        date: '2023-03-22T13:30:00.000Z',
        AAPL: 157.8300018310547,
      },
      {
        date: '2023-03-23T13:30:00.000Z',
        AAPL: 158.92999267578125,
      },
      {
        date: '2023-03-24T13:30:00.000Z',
        AAPL: 160.25,
      },
      {
        date: '2023-03-27T13:30:00.000Z',
        AAPL: 158.27999877929688,
      },
      {
        date: '2023-03-28T13:30:00.000Z',
        AAPL: 157.64999389648438,
      },
      {
        date: '2023-03-29T13:30:00.000Z',
        AAPL: 160.77000427246094,
      },
      {
        date: '2023-03-30T13:30:00.000Z',
        AAPL: 162.36000061035156,
      },
      {
        date: '2023-03-31T13:30:00.000Z',
        AAPL: 164.89999389648438,
      },
      {
        date: '2023-04-03T13:30:00.000Z',
        AAPL: 166.1699981689453,
      },
      {
        date: '2023-04-04T13:30:00.000Z',
        AAPL: 165.6300048828125,
      },
      {
        date: '2023-04-05T13:30:00.000Z',
        AAPL: 163.75999450683594,
      },
      {
        date: '2023-04-06T13:30:00.000Z',
        AAPL: 164.66000366210938,
      },
      {
        date: '2023-04-10T13:30:00.000Z',
        AAPL: 162.02999877929688,
      },
      {
        date: '2023-04-11T13:30:00.000Z',
        AAPL: 160.8000030517578,
      },
      {
        date: '2023-04-12T13:30:00.000Z',
        AAPL: 160.10000610351562,
      },
      {
        date: '2023-04-13T13:30:00.000Z',
        AAPL: 165.55999755859375,
      },
      {
        date: '2023-04-14T13:30:00.000Z',
        AAPL: 165.2100067138672,
      },
      {
        date: '2023-04-17T13:30:00.000Z',
        AAPL: 165.22999572753906,
      },
      {
        date: '2023-04-18T20:00:04.000Z',
        AAPL: 166.47000122070312,
      },
    ],
    high: 103.34,
    low: 78.21,
  },
  {
    name: 'MSFT',
    data: [
      {
        date: '2023-01-03T14:30:00.000Z',
        MSFT: 239.5800018310547,
      },
      {
        date: '2023-01-04T14:30:00.000Z',
        MSFT: 229.10000610351562,
      },
      {
        date: '2023-01-05T14:30:00.000Z',
        MSFT: 222.30999755859375,
      },
      {
        date: '2023-01-06T14:30:00.000Z',
        MSFT: 224.92999267578125,
      },
      {
        date: '2023-01-09T14:30:00.000Z',
        MSFT: 227.1199951171875,
      },
      {
        date: '2023-01-10T14:30:00.000Z',
        MSFT: 228.85000610351562,
      },
      {
        date: '2023-01-11T14:30:00.000Z',
        MSFT: 235.77000427246094,
      },
      {
        date: '2023-01-12T14:30:00.000Z',
        MSFT: 238.50999450683594,
      },
      {
        date: '2023-01-13T14:30:00.000Z',
        MSFT: 239.22999572753906,
      },
      {
        date: '2023-01-17T14:30:00.000Z',
        MSFT: 240.35000610351562,
      },
      {
        date: '2023-01-18T14:30:00.000Z',
        MSFT: 235.80999755859375,
      },
      {
        date: '2023-01-19T14:30:00.000Z',
        MSFT: 231.92999267578125,
      },
      {
        date: '2023-01-20T14:30:00.000Z',
        MSFT: 240.22000122070312,
      },
      {
        date: '2023-01-23T14:30:00.000Z',
        MSFT: 242.5800018310547,
      },
      {
        date: '2023-01-24T14:30:00.000Z',
        MSFT: 242.0399932861328,
      },
      {
        date: '2023-01-25T14:30:00.000Z',
        MSFT: 240.61000061035156,
      },
      {
        date: '2023-01-26T14:30:00.000Z',
        MSFT: 248,
      },
      {
        date: '2023-01-27T14:30:00.000Z',
        MSFT: 248.16000366210938,
      },
      {
        date: '2023-01-30T14:30:00.000Z',
        MSFT: 242.7100067138672,
      },
      {
        date: '2023-01-31T14:30:00.000Z',
        MSFT: 247.80999755859375,
      },
      {
        date: '2023-02-01T14:30:00.000Z',
        MSFT: 252.75,
      },
      {
        date: '2023-02-02T14:30:00.000Z',
        MSFT: 264.6000061035156,
      },
      {
        date: '2023-02-03T14:30:00.000Z',
        MSFT: 258.3500061035156,
      },
      {
        date: '2023-02-06T14:30:00.000Z',
        MSFT: 256.7699890136719,
      },
      {
        date: '2023-02-07T14:30:00.000Z',
        MSFT: 267.55999755859375,
      },
      {
        date: '2023-02-08T14:30:00.000Z',
        MSFT: 266.7300109863281,
      },
      {
        date: '2023-02-09T14:30:00.000Z',
        MSFT: 263.6199951171875,
      },
      {
        date: '2023-02-10T14:30:00.000Z',
        MSFT: 263.1000061035156,
      },
      {
        date: '2023-02-13T14:30:00.000Z',
        MSFT: 271.32000732421875,
      },
      {
        date: '2023-02-14T14:30:00.000Z',
        MSFT: 272.1700134277344,
      },
      {
        date: '2023-02-15T14:30:00.000Z',
        MSFT: 269.32000732421875,
      },
      {
        date: '2023-02-16T14:30:00.000Z',
        MSFT: 262.1499938964844,
      },
      {
        date: '2023-02-17T14:30:00.000Z',
        MSFT: 258.05999755859375,
      },
      {
        date: '2023-02-21T14:30:00.000Z',
        MSFT: 252.6699981689453,
      },
      {
        date: '2023-02-22T14:30:00.000Z',
        MSFT: 251.50999450683594,
      },
      {
        date: '2023-02-23T14:30:00.000Z',
        MSFT: 254.77000427246094,
      },
      {
        date: '2023-02-24T14:30:00.000Z',
        MSFT: 249.22000122070312,
      },
      {
        date: '2023-02-27T14:30:00.000Z',
        MSFT: 250.16000366210938,
      },
      {
        date: '2023-02-28T14:30:00.000Z',
        MSFT: 249.4199981689453,
      },
      {
        date: '2023-03-01T14:30:00.000Z',
        MSFT: 246.27000427246094,
      },
      {
        date: '2023-03-02T14:30:00.000Z',
        MSFT: 251.11000061035156,
      },
      {
        date: '2023-03-03T14:30:00.000Z',
        MSFT: 255.2899932861328,
      },
      {
        date: '2023-03-06T14:30:00.000Z',
        MSFT: 256.8699951171875,
      },
      {
        date: '2023-03-07T14:30:00.000Z',
        MSFT: 254.14999389648438,
      },
      {
        date: '2023-03-08T14:30:00.000Z',
        MSFT: 253.6999969482422,
      },
      {
        date: '2023-03-09T14:30:00.000Z',
        MSFT: 252.32000732421875,
      },
      {
        date: '2023-03-10T14:30:00.000Z',
        MSFT: 248.58999633789062,
      },
      {
        date: '2023-03-13T13:30:00.000Z',
        MSFT: 253.9199981689453,
      },
      {
        date: '2023-03-14T13:30:00.000Z',
        MSFT: 260.7900085449219,
      },
      {
        date: '2023-03-15T13:30:00.000Z',
        MSFT: 265.44000244140625,
      },
      {
        date: '2023-03-16T13:30:00.000Z',
        MSFT: 276.20001220703125,
      },
      {
        date: '2023-03-17T13:30:00.000Z',
        MSFT: 279.42999267578125,
      },
      {
        date: '2023-03-20T13:30:00.000Z',
        MSFT: 272.2300109863281,
      },
      {
        date: '2023-03-21T13:30:00.000Z',
        MSFT: 273.7799987792969,
      },
      {
        date: '2023-03-22T13:30:00.000Z',
        MSFT: 272.2900085449219,
      },
      {
        date: '2023-03-23T13:30:00.000Z',
        MSFT: 277.6600036621094,
      },
      {
        date: '2023-03-24T13:30:00.000Z',
        MSFT: 280.57000732421875,
      },
      {
        date: '2023-03-27T13:30:00.000Z',
        MSFT: 276.3800048828125,
      },
      {
        date: '2023-03-28T13:30:00.000Z',
        MSFT: 275.2300109863281,
      },
      {
        date: '2023-03-29T13:30:00.000Z',
        MSFT: 280.510009765625,
      },
      {
        date: '2023-03-30T13:30:00.000Z',
        MSFT: 284.04998779296875,
      },
      {
        date: '2023-03-31T13:30:00.000Z',
        MSFT: 288.29998779296875,
      },
      {
        date: '2023-04-03T13:30:00.000Z',
        MSFT: 287.2300109863281,
      },
      {
        date: '2023-04-04T13:30:00.000Z',
        MSFT: 287.17999267578125,
      },
      {
        date: '2023-04-05T13:30:00.000Z',
        MSFT: 284.3399963378906,
      },
      {
        date: '2023-04-06T13:30:00.000Z',
        MSFT: 291.6000061035156,
      },
      {
        date: '2023-04-10T13:30:00.000Z',
        MSFT: 289.3900146484375,
      },
      {
        date: '2023-04-11T13:30:00.000Z',
        MSFT: 282.8299865722656,
      },
      {
        date: '2023-04-12T13:30:00.000Z',
        MSFT: 283.489990234375,
      },
      {
        date: '2023-04-13T13:30:00.000Z',
        MSFT: 289.8399963378906,
      },
      {
        date: '2023-04-14T13:30:00.000Z',
        MSFT: 286.1400146484375,
      },
      {
        date: '2023-04-17T13:30:00.000Z',
        MSFT: 288.79998779296875,
      },
      {
        date: '2023-04-18T20:00:04.000Z',
        MSFT: 288.3699951171875,
      },
    ],
    high: 300.94,
    low: 276.90,
  },
];

module.exports = sampleData;
