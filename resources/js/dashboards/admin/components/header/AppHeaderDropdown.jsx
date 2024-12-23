import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilCart,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'


const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <img width={60} src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1734932665~exp=1734936265~hmac=a0c7a34e72939c2a5ac76041cbc9f475148091bc1eaf4e6f0796c7f31f39dbe7&w=740" alt="" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>

        <CDropdownItem href="/dashboard/user/quries">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          {/* <CBadge color="success" className="ms-2">
            42
          </CBadge> */}
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
        <CDropdownItem href="/profile">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="/dashboard/home/index/setting">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="/dashboard/transactions">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          {/* <CBadge color="secondary" className="ms-2">
            42
          </CBadge> */}
        </CDropdownItem>
        <CDropdownItem href="/dashboard/customers/orders">
          <CIcon icon={cilCart} className="me-2" />
          Orders
          {/* <CBadge color="secondary" className="ms-2">
            42
          </CBadge> */}
        </CDropdownItem>

        <CDropdownDivider />
        <CDropdownItem href="/logout">
          <CIcon icon={cilLockLocked} className="me-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
