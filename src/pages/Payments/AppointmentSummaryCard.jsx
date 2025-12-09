import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';

const AppointmentSummaryCard = ({ appointmentData, amount = 500 }) => {
  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: { xs: '100%', sm: '450px', md: '525px' },
      height: { xs: 'auto', sm: 'auto', md: '338px' },
      mb: { xs: 3, sm: 4, md: 6 },
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Paper elevation={0} sx={{ 
        width: '100%', 
        height: '100%', 
        borderRadius: { xs: '8px', sm: '10px', md: '12px' }, 
        border: '1px solid #E0E0E0', 
        backgroundColor: '#F8F9FA', 
        p: { xs: '12px', sm: '14px', md: '16px' }, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between' 
      }}>
        {/* Header */}
        <Box>
          <Typography sx={{ 
            fontSize: { xs: '15px', sm: '16px', md: '17px' }, 
            fontWeight: 500, 
            color: '#000000', 
            mb: { xs: 2, sm: 2.5, md: 3 }
          }}>
            Appointment Summary
          </Typography>

          {/* Details Section */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: { xs: 1, sm: 1.25, md: 1.5 },
            mb: { xs: 1.5, sm: 1.75, md: 2 }
          }}>
            {appointmentData && (
              <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    color: '#666666' 
                  }}>
                    Patient Name:
                  </Typography>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    fontWeight: 300, 
                    color: '#000000',
                    textAlign: 'right',
                    ml: 1
                  }}>
                    {appointmentData.name}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    color: '#666666' 
                  }}>
                    Email:
                  </Typography>
                  <Typography sx={{ 
                    fontSize: { xs: '12px', sm: '13px', md: '16px' }, 
                    fontWeight: 300, 
                    color: '#000000',
                    textAlign: 'right',
                    ml: 1,
                    wordBreak: 'break-word'
                  }}>
                    {appointmentData.email}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    color: '#666666' 
                  }}>
                    Phone:
                  </Typography>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    fontWeight: 300, 
                    color: '#000000',
                    textAlign: 'right',
                    ml: 1
                  }}>
                    {appointmentData.phone}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    color: '#666666' 
                  }}>
                    Treatment:
                  </Typography>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    fontWeight: 300, 
                    color: '#000000',
                    textAlign: 'right',
                    ml: 1
                  }}>
                    {appointmentData.service}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    color: '#666666' 
                  }}>
                    Date & Time:
                  </Typography>
                  <Typography sx={{ 
                    fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                    fontWeight: 300, 
                    color: '#000000',
                    textAlign: 'right',
                    ml: 1
                  }}>
                    {appointmentData.date} at {appointmentData.time}
                  </Typography>
                </Box>

                {appointmentData.notes && (
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ 
                      fontSize: { xs: '13px', sm: '14px', md: '16px' }, 
                      color: '#666666' 
                    }}>
                      Notes:
                    </Typography>
                    <Typography sx={{ 
                      fontSize: { xs: '12px', sm: '13px', md: '16px' }, 
                      fontWeight: 300, 
                      color: '#000000',
                      textAlign: 'right',
                      ml: 1,
                      maxWidth: '60%'
                    }}>
                      {appointmentData.notes}
                    </Typography>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: { xs: 1, sm: 1.25, md: 1.5 } }} />

        {/* Footer - Total Amount */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ 
            fontSize: { xs: '15px', sm: '16px', md: '17px' }, 
            fontWeight: 400, 
            color: '#000000' 
          }}>
            Total Amount
          </Typography>
          <Typography sx={{ 
            fontSize: { xs: '15px', sm: '16px', md: '17px' }, 
            fontWeight: 400, 
            color: '#151414' 
          }}>
            ₹{amount}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default AppointmentSummaryCard;