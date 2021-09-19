export default function routes() {
  this.namespace = 'api'
  this.timing = 500 // delay in 0.5s
  this.resource('users')
  this.resource('products')
}
