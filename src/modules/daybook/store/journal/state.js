
export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod tempora, quaerat doloribus quam fuga vitae ratione ut quisquam delectus, dolor amet porro dolores quidem quis fugiat consequatur obcaecati. Facere.',
      picture: null
    },
    {
      id: new Date().getTime() + 100000000000000000000000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor.',
      picture: null
    },
    {
      id: new Date().getTime() + 200000000000000000000000,
      date: new Date().toDateString(),
      text: 'dolor.',
      picture: null
    },
  ]
})