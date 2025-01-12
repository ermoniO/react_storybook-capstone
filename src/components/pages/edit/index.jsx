import './style.css'
import { NbosDashboardOverviewTemplate } from 'components/features/dashboard/NbosDashboardOverviewTemplate'
import { NbosOpportunitiesTableTemplate } from 'components/features/dashboard/NbosOpportunitiesTableTemplate'
import { NbosOpportunitiesSummaryTemplate } from 'components/features/dashboard/NbosOpportunitiesSummaryTemplate'
import { NbosMetricsTemplate } from 'components/features/dashboard/NbosMetricsTemplate'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { NbosMetrics } from 'components/features/metrics/NbosMetrics'
import { useState, useEffect } from 'react'

export function EditPage() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 768) // Show only if screen width > 768px
    }

    handleResize() // Check on initial render
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!isVisible) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px', padding: '10px' }}>
        <h2>Content Unavailable</h2>
        <p>
          Due to the nature of this application, the dashboard is not accessible
          on smaller screens. Please view this application on a desktop.
        </p>
      </div>
    )
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              National Bank of Springfield
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <main className="tw-mt-8">
        <div className="tw-flex tw-px-[10px]">
          <section className="tw-grow">
            <NbosDashboardOverviewTemplate />
            <NbosMetrics />
            <NbosOpportunitiesSummaryTemplate />
            <NbosOpportunitiesTableTemplate />
          </section>
        </div>
      </main>
    </>
  )
}
