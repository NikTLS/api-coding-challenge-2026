const { handler } = require ('../src/index.cjs')

describe('Test Handler', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns Shop Check', async () => {
    const response = await handler(
      {
        queryString: { shopUrl: 'https://foo.bar' },
      },
    )

    const actual = JSON.parse(response.body)

    expect(actual).toEqual(
      expect.objectContaining(
        {
          shopUrl: 'https://foo.bar',
          httpsCheck: true,
          reachableCheck: true,
          imprintCheck: true,
          fakeShopCheck: true,
        },
      ),
    )
  })
})
