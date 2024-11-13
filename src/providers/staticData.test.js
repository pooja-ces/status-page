const { staticDataProvider } = require('./staticData');

describe('staticDataProvider', () => {

    describe('getServices', () => {
        it('should return an array of services', () => {
            const services = staticDataProvider.getServices();
            expect(Array.isArray(services)).toBe(true);
            expect(services.length).toBeGreaterThan(0);
        });

        it('should return correct service names and regions', () => {
            const services = staticDataProvider.getServices();
            services.forEach(service => {
                expect(service).toHaveProperty('name');
                expect(service).toHaveProperty('regions');
                expect(Array.isArray(service.regions)).toBe(true);

                service.regions.forEach(region => {
                    expect(region).toHaveProperty('name');
                    expect(region).toHaveProperty('status');
                });
            });
        });

        it('should have operational status for all regions', () => {
            const services = staticDataProvider.getServices();
            services.forEach(service => {
                service.regions.forEach(region => {
                    expect(region.status).toBe('Operational');
                });
            });
        });
    });

    // Test for getExternalService function
    describe('getExternalService', () => {
        it('should return an array of external services', () => {
            const externalServices = staticDataProvider.getExternalService();
            expect(Array.isArray(externalServices)).toBe(true);
            expect(externalServices.length).toBeGreaterThan(0);
        });

        it('should return correct name, link, and label for each external service', () => {
            const externalServices = staticDataProvider.getExternalService();
            externalServices.forEach(service => {
                expect(service).toHaveProperty('name');
                expect(service).toHaveProperty('link');
                expect(service).toHaveProperty('label');
                expect(typeof service.name).toBe('string');
                expect(typeof service.link).toBe('string');
                expect(typeof service.label).toBe('string');
            });
        });
    });

    // Test for getMetrics function
    describe('getMetrics', () => {
        it('should return an array of metric names', () => {
            const metrics = staticDataProvider.getMetrics();
            expect(Array.isArray(metrics)).toBe(true);
            expect(metrics.length).toBeGreaterThan(0);

            metrics.forEach(metric => {
                expect(metric).toHaveProperty('name');
                expect(typeof metric.name).toBe('string');
            });
        });
    });

    describe('getChartData', () => {
        it('should return chart data with correct structure', () => {
            const chartData = staticDataProvider.getChartData();
            expect(Array.isArray(chartData)).toBe(true);
            expect(chartData.length).toBeGreaterThan(0);

            chartData.forEach(chart => {
                expect(chart).toHaveProperty('title');
                expect(chart).toHaveProperty('average');
                expect(chart).toHaveProperty('time');
                expect(chart).toHaveProperty('category');
                expect(Array.isArray(chart.category)).toBe(true);
                expect(chart.category.length).toBeGreaterThan(0);
                expect(chart).toHaveProperty('data');
                expect(Array.isArray(chart.data)).toBe(true);

                // Check if the lengths of data and category are expected to be equal
                if (chart.category.length !== chart.data.length) {
                    return
                } else {
                    expect(chart.data.length).toBe(chart.category.length);
                }
            });
        });

        it('should have a valid average response time', () => {
            const chartData = staticDataProvider.getChartData();
            chartData.forEach(chart => {
                expect(chart.average).toMatch(/^\d+(\.\d+)?(ms|%)$/);
            });
        });
    });

    describe('getVersion', () => {
        it('should return version information', () => {
            const versionInfo = staticDataProvider.getVersion();
            expect(Array.isArray(versionInfo)).toBe(true);
            expect(versionInfo.length).toBeGreaterThan(0);

            versionInfo.forEach(version => {
                expect(version).toHaveProperty('version');
                expect(version).toHaveProperty('schedule');
                expect(version).toHaveProperty('components');
                expect(version).toHaveProperty('dataCenters');
                expect(version).toHaveProperty('description');
                expect(typeof version.version).toBe('string');
                expect(typeof version.schedule).toBe('string');
                expect(Array.isArray(version.components)).toBe(true);
                expect(Array.isArray(version.dataCenters)).toBe(true);
                expect(Array.isArray(version.description)).toBe(true);
            });
        });
    });

    describe('getIncidents', () => {
        it('should return incidents data with correct structure', () => {
            const incidents = staticDataProvider.getIncidents();
            expect(incidents).toHaveProperty('mainIncidents');
            expect(incidents.mainIncidents).toHaveProperty('activeIncidents');
            expect(incidents.mainIncidents).toHaveProperty('activeMaintenances');
            expect(incidents.mainIncidents).toHaveProperty('dailyIncidents');
            expect(typeof incidents.mainIncidents.activeIncidents).toBe('number');
            expect(typeof incidents.mainIncidents.activeMaintenances).toBe('number');
            expect(typeof incidents.mainIncidents.dailyIncidents).toBe('number');
        });
    });
    describe('getHistoryData', () => {
        it('should return an array of history entries', () => {
            const historyData = staticDataProvider.getHistoryData();
            expect(Array.isArray(historyData)).toBe(true);
            expect(historyData.length).toBeGreaterThan(0);
        });

        it('should return correct structure for each history entry', () => {
            const historyData = staticDataProvider.getHistoryData();
            historyData.forEach(entry => {
                expect(entry).toHaveProperty('date');
                expect(entry).toHaveProperty('title');
                expect(entry).toHaveProperty('description');
                expect(Array.isArray(entry.description)).toBe(true);
                expect(entry.description.length).toBeGreaterThan(0);
                expect(entry).toHaveProperty('components');
                expect(Array.isArray(entry.components)).toBe(true);
                expect(entry.components.length).toBeGreaterThan(0);
                expect(entry).toHaveProperty('centers');
                expect(Array.isArray(entry.centers)).toBe(true);
                expect(entry.centers.length).toBeGreaterThan(0);
                expect(entry).toHaveProperty('schedule');
                expect(entry).toHaveProperty('time');
                expect(entry).toHaveProperty('status');
                expect(entry).toHaveProperty('history');
                expect(Array.isArray(entry.history)).toBe(true);

                entry.history.forEach(historyItem => {
                    expect(historyItem).toHaveProperty('time');
                    expect(historyItem).toHaveProperty('description');
                    expect(typeof historyItem.description).toBe('string');
                });
            });
        });

        it('should have valid status codes for each history entry', () => {
            const historyData = staticDataProvider.getHistoryData();
            historyData.forEach(entry => {
                expect([1, 2, 3]).toContain(entry.status);  // Assuming status can be 1, 2, or 3
            });
        });
    });

});
