const ctx = document.getElementById('tokenomicsChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Public Sale (35%)',
          'Ecosystem/Rewards (20%)',
          'Team & Advisors (15%)',
          'Treasury (15%)',
          'Liquidity Provision (10%)',
          'Airdrops (5%)'
        ],
        datasets: [{
          label: '$CIRCUS Allocation',
          data: [35, 20, 15, 15, 10, 5],
          backgroundColor: [
            '#ff6384',
            '#36a2eb',
            '#ffce56',
            '#4bc0c0',
            '#9966ff',
            '#ff9f40'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });