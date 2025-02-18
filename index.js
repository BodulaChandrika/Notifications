const Notification = props => {
  //  Write your code here.
  const {className, iconUrl, classText} = props
  const containerClassName = `notification-container ${className}`
  return (
    <div className={containerClassName}>
      <img className='icon' src={iconUrl} />
      <p className='classText'>{classText}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Notifications</h1>
    <div className='notification-list-container'>
      <Notification
        className='primary-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        classText='Information Message'
      />
      <Notification
        className='success-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        classText='Success Message'
      />
      <Notification
        className='warning-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        classText='Warning Message'
      />
      <Notification
        className='danger-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        classText='Error Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
