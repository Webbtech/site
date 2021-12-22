import { NextApiRequest, NextApiResponse } from 'next'

// const IDENTITY_POOL_ID = 'ca-central-1:21195519-cbfb-4d3a-af58-764868991d2a'
// const REGION = 'ca-central-1'

const token =
  'IQoJb3JpZ2luX2VjEDwaDGNhLWNlbnRyYWwtMSJHMEUCIQC4EvuqWKQZQgjErSruSgCWI60QH7Wd5piwrlRPTMcLmwIgJ+RqLu4HC2kNOfsnhS+vwjilR7l9AW3P9Ha7cOKavQEqlwYINRAAGgwyMDcyNjIxNjUyNDMiDEjf03KOfadvAJHRWSr0BQ/cjLbnNqMKb6hw7NCZfVYtKc+dptjLahM3HLdnUZ5F6OzxzlvKqiIx+PDkqXtlU1mt1vVyBVJyXkzqmeb/FcCTznxwdAYRurWTnnF5+uIiU2OwvCCNogOMy/1lyIWZaEPG4II/8G8xJ/TXGrSjWONxtfVXKVgR3d5nDHVqLc4D+o02Po31xZ0eL7JN6oSaUrvvV4GIFzE3WFWta6GqeW47t6+OyrIirTGMkRO3+X/sqdaaffLCt3ju6+3pipTKGkCIDhkk7GmMsWzmTb7LJrUeR7kO2Asa6zCQxR24gw363z/TYKJr2g8MGigqJT+kP+a1fs71cOeR4wTw7hXRruGQLzJNGnvXSJvlnKjWLns63UqovFnq+wmkBxvphitKSKapRqrkCAxZ7B+pJRmvEZPwjbY4LEWR057Uh1W8jx0cF0Fd23VoTanj9GzetOZjCc7Tics0JbITNX3ywWS9wpXYqZwebky9iGYkkd7rgk3Um2KeuYm6sqB2ml55AIqvATS8zGC3BSEFyWjUQFaCnvU6blYNjgxjBGtCW/b9JVRqA0hl+bInmy9ro4nlGmupEAsuztDfYuyqhlDqDlscW225wQ6rcQ7yMX8gXwbwdUXaMzeV6BOYqZbVasxOxtlg548QrVJJb8ko+vV2YgmAJP3+ZcSVautMW40d0Qj7siyc/vDVvKr+hFV9VKZ9kHwEvsmJ00gIJ/Oq/sr8o61Bq4sLHK9uSbWupaAvqFbld0SN/wEAPPkPRtx4iSn/gR5x4MtokxCUc3taMpPFRTPK7Bd5zSIiTzd+zWoIU9UqV16yOeCcZd5JnljqdKpslGyvxW243FhMksMku+xTEDvBFsMY4DZMsQqat/naYeu+MqQNLa2FobijHbTH7KK1XCcOY6kGzuOAHeeY6kjacTcphGezd4E4Zv8gtch9Clghye7pp9LA7n9Vzt3cDlzqkcZY/mlRor/4MpFJ42dFS0KYD+Y2T8/M8Mjjo4odc5PFyhjhGZ2KtzCHhI6OBjqHAk6hQ2wJl3T1tZ18SV7G1E0KGr3gpSfyFJVhp74asTuK9iDe7bQuxQokHCh3Gg/zUD1SVo55ebinr2modKVJqO+TE/dDSGjIqGf5ktqYOqyndnON3tV0agmK4NN194lUZi/48RIk2P4T0O4s4JbNHx7E8OuG5C0lbowKfVn9YtAFKsdUebAEgQgyZxixhy6Xds1ZeW0olumAUFvTfiwQ3JBNmMVylIbCJ11gxzXsMkuo2EdcSCMZLNISKvjbSsNWZ9JEJ8/b6YDqC1ZiYf2+db0fWxzKUyYcdPTMXqADm0ZrADzDpDD5F9CF3GXPIs+ZRSExnK5jo+ZhvhLZ3PyW0HgIb6clR6qq'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(_req.body)
  const resp = await fetch('https://contact-api.webbtech.io/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: token,
    },
  })
  // console.log('resp: ', resp.status)
  // console.log('resp: ', resp.statusText)
  res.status(resp.status).json(body)
}

export default handler
