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
            title: "Hosted Status Pages Response Time",
            "average": "100%",
            time: "Today",
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
            title: "Hosted Status Pages Response Time",
            "average": "368.12ms",
            time: "Today",
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
            title: "API Response Time",
            "average": "661.64ms",
            time: "Today",
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
            title: "Hosted Status Pages Response Time",
            "average": "100%",
            time: "Week",
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
            title: "Hosted Status Pages Response Time",
            "average": "368.12ms",
            time: "Week",
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
            title: "API Response Time",
            "average": "661.64ms",
            time: "Week",
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
            title: "Hosted Status Pages Response Time",
            "average": "100%",
            time: "Month",
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
            title: "Hosted Status Pages Response Time",
            "average": "368.12ms",
            time: "Month",
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
            title: "API Response Time",
            "average": "661.64ms",
            time: "Month",
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
            schedule: "November 11, 2024 23:00 - 23:15 UTC",
            components: ["Hosted Status Pages", "Developer API", "Status API", "Dashboard", "Website"],
            "dataCenters": ["US-East", " US-West", "Ireland", "Toronto"],
            description: ["We will be deploying the next version of Status.io.", "There will be no downtime during this maintenance."]

        }
    ],
    getIncidents: () => ({
        mainIncidents: {
            activeIncidents: 0,
            activeMaintenances: 0,
            dailyIncidents: 55
        }
    }),
    getHistoryData: () => [
        {
            date: "October 2024",
            title: "Deploy Version 1.7.3",
            description: [
                "We will be deploying the next version of Status.io.",
                "This update will include bug fixes and performance improvements.",
                "There will be no downtime during this maintenance."
            ],
            components: [
                "Hosted Status Pages",
                "Developer API",
                "Status API",
                "Dashboard",
                "Website"
            ],
            centers: [
                "US-East",
                "US-West",
                "Ireland",
                "Toronto"
            ],
            schedule: "October 18, 2024 16:00 - October 18, 2024 16:15 UTC",
            time: "October 18, 2024 16:00 UTC",
            status: 1,
            history: [
                {
                    time: "October 27, 2023 16:56 UTC",
                    description: "[Update] Deployments starting."
                },
                {
                    time: "October 18, 2024 16:13 UTC",
                    description: "[Update] Deployments complete. Version 1.7.3 is now live in production. View the Changelog for more details at blog.status.io/tag/changelog"
                }
            ]
        },
        {
            date: "September 2024",
            title: "Deploy Version 1.7.2",
            description: [
                "This is a minor update that includes several bug fixes and performance improvements.",
                "No downtime is expected during the deployment."
            ],
            components: [
                "Hosted Status Pages",
                "Developer API",
                "Dashboard"
            ],
            centers: [
                "US-East",
                "US-West"
            ],
            schedule: "September 25, 2024 15:00 - September 25, 2024 15:30 UTC",
            time: "September 25, 2024 15:00 UTC",
            status: 1,
            history: [
                {
                    time: "September 25, 2024 15:05 UTC",
                    description: "[Update] Deployment started."
                },
                {
                    time: "September 25, 2024 15:25 UTC",
                    description: "[Completed] Deployment complete. Version 1.7.2 is live."
                }
            ]
        },
        {
            date: "August 2024",
            title: "Security Update and Maintenance",
            description: [
                "A critical security update will be applied to improve system security and resolve vulnerabilities.",
                "All services are expected to be affected during this maintenance window."
            ],
            components: [
                "Developer API",
                "Status API",
                "Website"
            ],
            centers: [
                "US-East",
                "US-West",
                "Ireland"
            ],
            schedule: "August 22, 2024 10:00 - August 22, 2024 10:30 UTC",
            time: "August 22, 2024 10:00 UTC",
            status: 2,
            history: [
                {
                    time: "August 22, 2024 10:05 UTC",
                    description: "[Maintenance] Security update is now being deployed."
                },
                {
                    time: "August 22, 2024 10:15 UTC",
                    description: "[Completed] The update has been successfully deployed. All affected services are now restored."
                }
            ]
        },
        {
            date: "July 2024",
            title: "Feature Update for Dashboard",
            description: [
                "A new feature will be added to the dashboard, allowing for better user customization.",
                "The deployment is expected to be seamless with no downtime."
            ],
            components: [
                "Dashboard"
            ],
            centers: [
                "US-East",
                "US-West"
            ],
            schedule: "July 30, 2024 14:00 - July 30, 2024 14:30 UTC",
            time: "July 30, 2024 14:00 UTC",
            status: 1,
            history: [
                {
                    time: "July 30, 2024 14:10 UTC",
                    description: "[Update] Feature deployment is underway."
                },
                {
                    time: "July 30, 2024 14:20 UTC",
                    description: "[Completed] New dashboard feature successfully deployed."
                }
            ]
        },
        {
            date: "June 2024",
            title: "Maintenance and Server Upgrade",
            description: [
                "We will be performing a server upgrade to enhance performance and stability.",
                "There will be a brief maintenance window during this upgrade."
            ],
            components: [
                "Hosted Status Pages",
                "Website"
            ],
            centers: [
                "US-East",
                "Ireland"
            ],
            schedule: "June 15, 2024 11:00 - June 15, 2024 11:30 UTC",
            time: "June 15, 2024 11:00 UTC",
            status: 2,
            history: [
                {
                    time: "June 15, 2024 11:05 UTC",
                    description: "[Update] Maintenance window has begun."
                },
                {
                    time: "June 15, 2024 11:25 UTC",
                    description: "[Completed] Server upgrade complete and services are fully restored."
                }
            ]
        },
        {
            date: "May 2024",
            title: "Deploy Version 1.7.1",
            description: [
                "This deployment introduces several important bug fixes.",
                "There will be no downtime during the maintenance."
            ],
            components: [
                "Status API",
                "Dashboard"
            ],
            centers: [
                "US-West"
            ],
            schedule: "May 10, 2024 09:00 - May 10, 2024 09:15 UTC",
            time: "May 10, 2024 09:00 UTC",
            status: 3,
            history: [
                {
                    time: "May 10, 2024 09:10 UTC",
                    description: "[Update] Deployment in progress."
                },
                {
                    time: "May 10, 2024 09:13 UTC",
                    description: "[Completed] Version 1.7.1 is live. No downtime experienced."
                }
            ]
        },
        {
            date: "April 2024",
            title: "Scheduled Database Maintenance",
            description: [
                "We will be performing scheduled maintenance on our database infrastructure.",
                "There may be intermittent access to some services during this period."
            ],
            components: [
                "Developer API",
                "Status API"
            ],
            centers: [
                "US-East"
            ],
            schedule: "April 21, 2024 13:00 - April 21, 2024 13:45 UTC",
            time: "April 21, 2024 13:00 UTC",
            status: 1,
            history: [
                {
                    time: "April 21, 2024 13:10 UTC",
                    description: "[Update] Database maintenance started."
                },
                {
                    time: "April 21, 2024 13:40 UTC",
                    description: "[Completed] Database maintenance complete. No issues reported."
                }
            ]
        },
        {
            date: "March 2024",
            title: "Deploy Version 1.7.0",
            description: [
                "The update will include new features for better user experience.",
                "There will be no downtime during the deployment."
            ],
            components: [
                "Hosted Status Pages",
                "Website"
            ],
            centers: [
                "US-East",
                "Toronto"
            ],
            schedule: "March 28, 2024 17:00 - March 28, 2024 17:30 UTC",
            time: "March 28, 2024 17:00 UTC",
            status: 1,
            history: [
                {
                    time: "March 28, 2024 17:10 UTC",
                    description: "[Update] Deployment process has started."
                },
                {
                    time: "March 28, 2024 17:20 UTC",
                    description: "[Completed] Version 1.7.0 successfully deployed."
                }
            ]
        },
        {
            date: "February 2024",
            title: "Infrastructure Update",
            description: [
                "We are upgrading our infrastructure to improve overall performance.",
                "No downtime expected."
            ],
            components: [
                "Dashboard",
                "Developer API"
            ],
            centers: [
                "US-West"
            ],
            schedule: "February 15, 2024 16:00 - February 15, 2024 16:30 UTC",
            time: "February 15, 2024 16:00 UTC",
            status: 2,
            history: [
                {
                    time: "February 15, 2024 16:10 UTC",
                    description: "[Update] Infrastructure upgrade started."
                },
                {
                    time: "February 15, 2024 16:25 UTC",
                    description: "[Completed] Infrastructure upgrade complete. All systems are operational."
                }
            ]
        }
    ]
}
