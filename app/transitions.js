export default function() {
  this.transition(
    this.fromRoute('manage.hosts.host.edit'),
    this.toRoute('manage.hosts.host.services'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('manage.customers.customer.edit'),
    this.toRoute([
      'manage.customers.customer.info',
      'manage.customers.customer.permissions'
    ]),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('manage.customers.customer.info'),
    this.toRoute('manage.customers.customer.permissions'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('manage.host-groups.host-group.edit'),
    this.toRoute('manage.host-groups.host-group.hosts'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
