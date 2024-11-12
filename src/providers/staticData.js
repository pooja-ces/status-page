export const staticDataProvider = {
    getServices: () => [
        {
            "name": "Hosted Status Pages",
            "regions": [
                {
                    "name": "US-East", "status": "Operational"
                },
                {
                    "name": "US-West", "status": "Operational"
                },
                {
                    "name": "Ireland", "status": "Operational"
                },
                {
                    "name": "Toronto", "status": "Operational"
                }
            ],
            "status": "Operational"
        },
        {
            "name": "Status Notifications",
            "regions": [
                {
                    "name": "Email", "status": "Operational"
                },
                {
                    "name": "Webhook", "status": "Operational"
                },
                {
                    "name": "SMS", "status": "Operational"
                },
                {
                    "name": "IRC", "status": "Operational"
                },
                {
                    "name": "Twitter", "status": "Operational"
                },
                {
                    "name": "Microsoft Teams", "status": "Operational"
                },
                {
                    "name": "Slack", "status": "Operational"
                }
            ],
            "status": "Operational"
        },
        {
            "name": "Developer API",
            "regions": [
                {
                    "name": "US-East", "status": "Operational"
                },
                {
                    "name": "US-West", "status": "Operational"
                },
                {
                    "name": "Ireland", "status": "Operational"
                },
                {
                    "name": "Toronto", "status": "Operational"
                }
            ],
            "status": "Operational"
        },
        {
            "name": "Status API",
            "regions": [
                {
                    "name": "US-East", "status": "Operational"
                },
                {
                    "name": "US-West", "status": "Operational"
                },
                {
                    "name": "Ireland", "status": "Operational"
                },
                {
                    "name": "Toronto", "status": "Operational"
                }
            ],
            "status": "Operational"
        },
        {
            "name": "Dashboard",
            "regions": [
                {
                    "name": "US-East", "status": "Operational"
                },
                {
                    "name": "US-West", "status": "Operational"
                },
                {
                    "name": "Ireland", "status": "Operational"
                },
                {
                    "name": "Toronto", "status": "Operational"
                }
            ],
            "status": "Operational"
        },
        {
            "name": "Website",
            "regions": [
                {
                    "name": "US-East", "status": "Operational"
                },
                {
                    "name": "US-West", "status": "Operational"
                },
                {
                    "name": "Ireland", "status": "Operational"
                },
                {
                    "name": "Toronto", "status": "Operational"
                }
            ],
            "status": "Operational"
        }
    ],
    getExternalService: () => [
        {
            "name": "AWS CloudFront",
            "link": "https://health.aws.amazon.com/health/status",
            "label": "CDN"
        },
        {
            "name": "AWS EC2",
            "link": "https://health.aws.amazon.com/health/status",
            "label": "Server Hosting"
        },
        {
            "name": "AWS Route 53",
            "link": "https://health.aws.amazon.com/health/status",
            "label": "DNS"
        },
        {
            "name": "AWS S3",
            "link": "https://health.aws.amazon.com/health/status",
            "label": "File Hosting"
        },
        {
            "name": "DigitalOcean",
            "link": "https://status.digitalocean.com/",
            "label": "Cloude Hosting"
        },
        {
            "name": "GitHub",
            "link": "https://www.githubstatus.com/",
            "label": "Code Repository"
        },
        {
            "name": "New Relic",
            "link": "https://status.newrelic.com/",
            "label": "Monitoring"
        },
        {
            "name": "PagarDuty",
            "link": "https://status.pagerduty.com/posts/dashboard",
            "label": "Alerting"
        },
        {
            "name": "pingdom",
            "link": "https://status.pingdom.com/",
            "label": "Monitoring"
        },
        {
            "name": "Postmark",
            "link": "https://status.postmarkapp.com/",
            "label": "Email Delivery"
        },
        {
            "name": "Slack",
            "link": "https://slack-status.com/",
            "label": "Chat"
        },
        {
            "name": "Stripe",
            "link": "https://status.stripe.com/",
            "label": "Payment Processing"
        },
        {
            "name": "Twitter",
            "link": "https://status.twitterstat.us/",
            "label": "Social Network"
        },
        {
            "name": "YubiCloud",
            "link": "https://status.yubico.com/",
            "label": "Security"
        }
    ],
    getMetrics: () => [
        { name: "Today" },
        { name: "Week" },
        { name: "Month" }
    ],
    getChartData: () => [
        {
            "title": "Hosted Status Pages Response Time",
            "average": "100%",
            "time": "Today",
            "category": [
                "12 PM",
                "03 PM",
                "06 PM",
                "09 PM",
                "11.Nov",
                "03 AM",
                "06 AM",
                "09 AM"
            ],
            "data": [
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100
            ]
        },
        {
            "title": "Hosted Status Pages Response Time",
            "average": "368.12ms",
            "time": "Today",
            "category": [
                "12 PM",
                "03 PM",
                "06 PM",
                "09 PM",
                "11.Nov",
                "03 AM",
                "06 AM",
                "09 AM"
            ],
            "data": [
                383,
                371,
                300,
                383,
                370,
                360,
                380,
                300
            ]
        },
        {
            "title": "API Response Time",
            "average": "661.64ms",
            "time": "Today",
            "category": [
                "06 AM",
                "09 AM",
                "12 PM",
                "03 PM",
                "06 PM",
                "09 PM",
                "11 PM",
                "03 AM"
            ],
            "data": [
                483,
                471,
                400,
                483,
                470,
                460,
                480,
                400
            ]
        },
        {
            "title": "Hosted Status Pages Response Time",
            "average": "100%",
            "time": "Week",
            "category": [
                "4.Nov",
                "5.Nov",
                "6.Nov",
                "7.Nov",
                "8.Nov",
                "9.Nov",
                "10.Nov",
                "11.Nov"
            ],
            "data": [
                90,
                95,
                100,
                98,
                100,
                95,
                92,
                100
            ]
        },
        {
            "title": "Hosted Status Pages Response Time",
            "average": "368.12ms",
            "time": "Week",
            "category": [
                "4.Nov",
                "5.Nov",
                "6.Nov",
                "7.Nov",
                "8.Nov",
                "9.Nov",
                "10.Nov",
                "11.Nov"
            ],
            "data": [
                110,
                120,
                100,
                115,
                110,
                125,
                105
            ]
        },
        {
            "title": "API Response Time",
            "average": "661.64ms",
            "time": "Week",
            "category": [
                "4.Nov",
                "5.Nov",
                "6.Nov",
                "7.Nov",
                "8.Nov",
                "9.Nov",
                "10.Nov",
                "11.Nov"
            ],
            "data": [
                200,
                190,
                180,
                220,
                210,
                230,
                240
            ]
        },
        {
            "title": "Hosted Status Pages Response Time",
            "average": "100%",
            "time": "Month",
            "category": [
                "12.Oct",
                "14.Oct",
                "16.Oct",
                "18.Oct",
                "20.Oct",
                "22.Oct",
                "24.Oct",
                "26.Oct",
                "28.Oct",
                "30.Oct",
                "1.Nov",
                "3.Nov",
                "5.Nov",
                "7.Nov",
                "9.Nov",
                "11.Nov"
            ],
            "data": [
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100,
                100
            ]
        },
        {
            "title": "Hosted Status Pages Response Time",
            "average": "368.12ms",
            "time": "Month",
            "category": [
                "12.Oct",
                "14.Oct",
                "16.Oct",
                "18.Oct",
                "20.Oct",
                "22.Oct",
                "24.Oct",
                "26.Oct",
                "28.Oct",
                "30.Oct",
                "1.Nov",
                "3.Nov",
                "5.Nov",
                "7.Nov",
                "9.Nov",
                "11.Nov"
            ],
            "data": [
                400,
                429,
                434,
                467,
                445,
                467,
                444,
                466,
                445,
                500,
                478,
                445,
                400,
                423,
                453,
                400
            ]
        },
        {
            "title": "API Response Time",
            "average": "661.64ms",
            "time": "Month",
            "category": [
                "12.Oct",
                "14.Oct",
                "16.Oct",
                "18.Oct",
                "20.Oct",
                "22.Oct",
                "24.Oct",
                "26.Oct",
                "28.Oct",
                "30.Oct",
                "1.Nov",
                "3.Nov",
                "5.Nov",
                "7.Nov",
                "9.Nov",
                "11.Nov"
            ],
            "data": [
                700,
                729,
                734,
                767,
                745,
                767,
                744,
                766,
                745,
                700,
                878,
                745,
                700,
                723,
                753,
                700
            ]
        }
    ],
    getVersion: () => [
        {

            "version": "1.7.3",
            "schedule": "November 11, 2024 23:00 - 23:15 UTC",
            "components": ["Hosted Status Pages", "Developer API", "Status API", "Dashboard", "Website"],
            "dataCenters": ["US-East", " US-West", "Ireland", "Toronto"],
            "description": ["We will be deploying the next version of Status.io.", "There will be no downtime during this maintenance."]

        }
    ],
    getIncidents: () => ({
        mainIncidents: {
            activeIncidents: 0,
            activeMaintenances: 0,
            dailyIncidents: 55
        }
    })
}
