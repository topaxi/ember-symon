export default function() {
  this.transition(
    this.fromRoute(route => route.endsWith('loading')),
    this.use('crossFade')
  )

  this.transition(
    this.fromRoute('manage.hosts.host.edit'),
    this.toRoute([
      'manage.hosts.host.services',
      'manage.hosts.host.loading'
    ]),
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

  this.transition(
    this.fromRoute('manage.commands.command.edit'),
    this.toRoute('manage.commands.command.guidelines'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
