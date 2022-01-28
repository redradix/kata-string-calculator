const add = require('./calculator.js')

describe('string calculator', () => {
  // 1.i
  describe('when provided with the empty string', () => {
    it('returns 0', () => {
      const input = ''

      const sum = add(input)

      expect(sum).toBe(0)
    })
  })

  describe('when provided with numbers separated by commas (,)', () => {
    // 1.i
    describe.each([
      { input: '1', expected: 1 },
      { input: '2', expected: 2 },
    ])('when provided with a single number', ({ input, expected }) => {
      it(`returns the number (${expected})`, () => {
        const sum = add(input)

        expect(sum).toBe(expected)
      })
    })

    // 1.i
    describe('when provided with two numbers', () => {
      it('return its sum', () => {
        const input = '1,2'

        const sum = add(input)

        expect(sum).toBe(3)
      })
    })

    // 2
    describe.each([
      { input: '1,2,3,4', expected: 10 },
      { input: '1,2,3,4,5,6,7,8,9,10', expected: 55 },
    ])(
      'when provided with an unknown amount of numbers',
      ({ input, expected }) => {
        it(`returns its sum (${expected})`, () => {
          const sum = add(input)

          expect(sum).toBe(expected)
        })
      },
    )
  })

  // 3.i
  describe('when provided with numbers separated by newlines (\\n)', () => {
    it('returns its sum', () => {
      const input = '1\n2\n3'

      const sum = add(input)

      expect(sum).toBe(6)
    })
  })

  // 3.i
  describe('when provided with numbers separated by commas (,) or newlines (\\n)', () => {
    it('returns its sum', () => {
      const input = '1\n2,3'

      const sum = add(input)

      expect(sum).toBe(6)
    })
  })

  // 3.ii (behaviour indicated by kAtaKRokEr's Product Owner)
  describe('when provided with numbers separated by multiple separators in a row', () => {
    it('throws', () => {
      const input = '1,\n'

      const sum = () => add(input)

      expect(sum).toThrow()
    })
  })

  // 4
  describe('when provided with custom delimiters', () => {
    describe('when provided with a semicolon (;) delimiter', () => {
      describe('when provided with numbers separated by semicolons (;)', () => {
        it('returns its sum', () => {
          const input = '//;\n1;2;3'

          const sum = add(input)

          expect(sum).toBe(6)
        })
      })

      describe('when provided with a list of numbers separated by comma (,)', () => {
        it.skip('shows an undefined behaviour', () => {
          const input = '//;\n1,2,3'

          const sum = add(input)

          expect(sum).toBe(6)
        })
      })
    })
  })

  // 5
  describe('when passed negative numbers', () => {
    describe('when passed a single negative number', () => {
      it('throws an error containing the negative number', () => {
        expect.assertions(2)

        const input = '1,2,-5'

        const sum = () => add(input)

        expect(sum).toThrow()

        try {
          sum()
        } catch (e) {
          expect(e.message).toEqual(expect.stringContaining('-5'))
        }
      })
    })

    describe('when passed multiple negative numbers', () => {
      it('throws an error containing those negative numbers', () => {
        expect.assertions(3)

        const input = '1,2,-3,4,-5'

        const sum = () => add(input)

        expect(sum).toThrow()

        try {
          sum()
        } catch (e) {
          expect(e.message).toEqual(expect.stringContaining('-3'))
          expect(e.message).toEqual(expect.stringContaining('-5'))
        }
      })
    })
  })

  // 6
  describe('when passed numbers containing numbers greater than 1000', () => {
    it('returns its sum ignoring numbers greater than 1000', () => {
      const input = '2,1001'

      const sum = add(input)

      expect(sum).toBe(2)
    })
  })
})
