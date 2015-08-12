export default function() {
  this.transition(
    this.fromRoute('manage.hosts.host.edit'),
    this.toRoute('manage.hosts.host.services'),
    this.use('toLeft'),
    this.reverse('toRight')
  )
}
