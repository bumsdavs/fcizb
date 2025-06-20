import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Timothy Bernando',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'timbernando38@gmail.com',
      createdOn: '2/5/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: false,
      balance_usd: 75225120.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2025',
        description: 'AirBnB Hawaii debit',
        status: 'Success',
        amount_usd: -4850.0
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Withdrawal from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'January 26, 2025',
        description: 'Withdrawal chk#229152',
        status: 'Success',
        amount_usd: -250120.0
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Teller Withdrawal',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Maitland Ashley Ward',
      mobileNumber: '***-***-****',
      email: 'm***@gmail.com',
      createdOn: '6/20/2025', // m/d/y
      username: 'Maitland5643',
      password: 'Ilovemabel'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: true,
      balance_usd: 879532.67
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        'Welcome to your new account. For questions or assistance, please contact our support team.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer to Tracy - XXXXXX3723',
        status: 'Success',
        amount_usd: -60000.0
      },
      {
        dateTime: 'June 10, 2025',
        description: 'Transfer from Marcus Reed - XXXXXX8351',
        status: 'Success',
        amount_usd: 45000.0
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Transfer to Elena Fischer - XXXXXX2179',
        status: 'Success',
        amount_usd: -28000.0
      },
      {
        dateTime: 'May 12, 2025',
        description: 'Transfer to Emily Watson - XXXXXX3402',
        status: 'Success',
        amount_usd: -31000.0
      },
      {
        dateTime: 'May 2, 2025',
        description: 'Transfer from Liam O’Connor - XXXXXX4903',
        status: 'Success',
        amount_usd: 122000.0
      },
      {
        dateTime: 'April 20, 2025',
        description: 'Transfer to Hugo Weber - XXXXXX6617',
        status: 'Success',
        amount_usd: -17000.0
      },
      {
        dateTime: 'April 4, 2025',
        description: 'Transfer from Adrian Keller - XXXXXX9285',
        status: 'Success',
        amount_usd: 28000.0
      },
      {
        dateTime: 'March 25, 2025',
        description: 'Transfer from Charlotte Moreau - XXXXXX3795',
        status: 'Success',
        amount_usd: 39500.0
      },
      {
        dateTime: 'March 18, 2025',
        description: 'Transfer from Zoey Bennett - XXXXXX6117',
        status: 'Success',
        amount_usd: 65000.0
      },
      {
        dateTime: 'March 3, 2025',
        description: 'Transfer from Daniel Carter - XXXXXX1938',
        status: 'Success',
        amount_usd: 156000.0
      },
      {
        dateTime: 'February 27, 2025',
        description: 'Transfer to Thomas Müller - XXXXXX2234',
        status: 'Success',
        amount_usd: -15000.0
      },
      {
        dateTime: 'February 14, 2025',
        description: 'Transfer to George Brown - XXXXXX1284',
        status: 'Success',
        amount_usd: -2200.0
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Transfer to Tracy - XXXXXX3723',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Transfer from Tracy - XXXXXX3644',
        status: 'Success',
        amount_usd: 1800.0
      },
      {
        dateTime: 'January 30, 2025',
        description: 'Transfer from Sofia Petrova - XXXXXX3069',
        status: 'Success',
        amount_usd: 7500.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'Transfer from Emma Wilson - XXXXXX2841',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Transfer to Andreas Jensen - XXXXXX5648',
        status: 'Success',
        amount_usd: -9400.0
      },
      {
        dateTime: 'January 9, 2025',
        description: 'Transfer from Clara Jensen - XXXXXX7741',
        status: 'Success',
        amount_usd: 9400.0
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Transfer from Lucas Meyer - XXXXXX4207',
        status: 'Success',
        amount_usd: 16000.0
      },
      {
        dateTime: 'December 1, 2024',
        description: 'Transfer to Anna Kowalska - XXXXXX7873',
        status: 'Success',
        amount_usd: -5200.0
      },
      {
        dateTime: 'November 21, 2024',
        description: 'Transfer to Martin Novak - XXXXXX6649',
        status: 'Success',
        amount_usd: -4200.0
      },
      {
        dateTime: 'October 6, 2024',
        description: 'Transfer from Leah Schneider - XXXXXX3586',
        status: 'Success',
        amount_usd: 82000.0
      },
      {
        dateTime: 'August 15, 2024',
        description: 'Transfer from Oliver Ivanov - XXXXXX7113',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        dateTime: 'July 30, 2024',
        description: 'Transfer to Stella Rossi - XXXXXX9983',
        status: 'Success',
        amount_usd: -16000.0
      },
      {
        dateTime: 'May 5, 2024',
        description: 'Transfer from Isaac Fischer - XXXXXX4800',
        status: 'Success',
        amount_usd: 37500.0
      },
      {
        dateTime: 'December 5, 2023',
        description: 'Transfer to Mabel - XXXXXX5097',
        status: 'Success',
        amount_usd: -35000.0
      },
      {
        dateTime: 'December 3, 2023',
        description: 'Transfer to Marie Laurent - XXXXXX1820',
        status: 'Success',
        amount_usd: -8900.0
      },
      {
        dateTime: 'October 15, 2023',
        description: 'Transfer to Brian Miller - XXXXXX6184',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'October 1, 2023',
        description: 'Transfer from Nathan Schmidt - XXXXXX5092',
        status: 'Success',
        amount_usd: 47000.0
      },
      {
        dateTime: 'September 28, 2023',
        description: 'Transfer from Olivia Schmidt - XXXXXX7430',
        status: 'Success',
        amount_usd: 100000.0
      },
      {
        dateTime: 'August 20, 2023',
        description: 'Transfer from Helena Bauer - XXXXXX2265',
        status: 'Success',
        amount_usd: 15500.0
      },
      {
        dateTime: 'July 15, 2023',
        description: 'Transfer to Tracy Andreas - XXXXXX2256',
        status: 'Success',
        amount_usd: -200000.0
      },
      {
        dateTime: 'June 12, 2023',
        description: 'Transfer to Max Cooper - XXXXXX6740',
        status: 'Success',
        amount_usd: -13400.0
      },
      {
        dateTime: 'March 20, 2023',
        description: 'Transfer from Lucas Bennett - XXXXXX8671',
        status: 'Success',
        amount_usd: 30000.0
      },
      {
        dateTime: 'March 4, 2023',
        description: 'Transfer from Sophie Dubois - XXXXXX4325',
        status: 'Success',
        amount_usd: 350000.0
      },
      {
        dateTime: 'February 8, 2023',
        description: 'Transfer from Laura Nowak - XXXXXX3904',
        status: 'Success',
        amount_usd: 22200.0
      },
      {
        dateTime: 'January 15, 2023',
        description: 'Transfer to Anderson (BOA) - XXXXXX1944',
        status: 'Success',
        amount_usd: -4000.0
      },
      {
        dateTime: 'January 15, 2023',
        description: 'Transfer from Ethan Novak - XXXXXX6732',
        status: 'Success',
        amount_usd: 179000.0
      },
      {
        dateTime: 'January 12, 2023',
        description: 'Transfer from Isabella Rossi - XXXXXX9826',
        status: 'Success',
        amount_usd: 100000.0
      }
    ]
  }
];
