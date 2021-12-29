fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json')
.then(response => response.json())
.then(data => {
    const keyData = [4, 5, 6, 7, 8, 9, 10, 11, 12];
    let countJan = -1;
    let countFeb = -1;
    let countMar = -1;
    let countApr = -1;
    let countMay = -1;
    let countJun = -1;
    let countJly = -1;
    let countAug = -1;
    let countSep = -1;
    let countOct = -1;
    let countNov = -1;
    let countDec = -1;
    let januaryData = [];
    let decemberData = [];
    let novemberData = [];
    let octoberData = [];
    let septemberData = [];
    let augustData = [];
    let julyData = [];
    let juneData = [];
    let mayData = [];
    let aprilData = [];
    let marchData = [];
    let februaryData = [];
    for (let i = 0; i < data.monthlyVariance.length; i++) {
        let month = data.monthlyVariance[i].month;
        switch (month) {
            case 1:
                januaryData.push([parseFloat((8.66 + data.monthlyVariance[i].variance).toFixed(1)), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 2:
                decemberData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 3:
                novemberData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 4:
                octoberData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 5:
                septemberData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 6:
                augustData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 7:
                julyData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 8:
                juneData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 9:
                mayData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 10:
                aprilData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 11:
                marchData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
            case 12:
                februaryData.push([(8.66 + data.monthlyVariance[i].variance).toFixed(1), 
                parseFloat((data.monthlyVariance[i].variance).toFixed(1)), data.monthlyVariance[i].year]);
                break;
        }
    }

    const svg = d3.select('body')
    .append('svg')
    .attr('id', 'legend')
    .attr('width', 347)
    .attr('height', 400);

    svg.append('text')
    .attr('id', 'monthLabel')
    .attr('transform', 'rotate(-90)')
    .attr('x', -220)
    .attr('y', 35)
    .text('Months');
    
    svg.selectAll('circle') //January
    .data(januaryData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 36.5)')
    .append('title')
    .text(d => {
        countJan++;
        return `January ${januaryData[countJan][2]}\nTemperature: ${januaryData[countJan][0]}°C\nTemperature Change: ${januaryData[countJan][1]}°C`;
    })

    svg.selectAll('circle') //December
    .data(decemberData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 54.5)')
    .append('title')
    .text(d => {
        countDec++;
        return `December ${decemberData[countDec][2]}\nTemperature: ${decemberData[countDec][0]}°C\nTemperature Change: ${decemberData[countDec][1]}°C`;
    });

    svg.selectAll('circle') //November
    .data(novemberData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 76)')
    .append('title')
    .text(d => {
        countNov++;
        return `November ${novemberData[countNov][2]}\nTemperature: ${novemberData[countNov][0]}°C\nTemperature Change: ${novemberData[countNov][1]}°C`;
    });

    svg.selectAll('circle') //October
    .data(octoberData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 96.8)')
    .append('title')
    .text(d => {
        countOct++;
        return `October ${octoberData[countOct][2]}\nTemperature: ${octoberData[countOct][0]}°C\nTemperature Change: ${octoberData[countOct][1]}°C`;
    });

    svg.selectAll('circle') //September
    .data(septemberData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 117.8)')
    .append('title')
    .text(d => {
        countSep++;
        return `September ${septemberData[countSep][2]}\nTemperature: ${septemberData[countSep][0]}°C\nTemperature Change: ${septemberData[countSep][1]}°C`;
    });

    svg.selectAll('circle') //August
    .data(augustData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 138.3)')
    .append('title')
    .text(d => {
        countAug++;
        return `August ${augustData[countAug][2]}\nTemperature: ${augustData[countAug][0]}°C\nTemperature Change: ${augustData[countAug][1]}°C`;
    });

    svg.selectAll('circle') //July
    .data(julyData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 23)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 159.4)')
    .append('title')
    .text(d => {
        countJly++;
        return `August ${julyData[countJly][2]}\nTemperature: ${julyData[countJly][0]}°C\nTemperature Change: ${julyData[countJly][1]}°C`;
    });

    svg.selectAll('circle') //June
    .data(juneData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 180.9)')
    .append('title')
    .text(d => {
        countJun++;
        return `June ${juneData[countJun][2]}\nTemperature: ${juneData[countJun][0]}°C\nTemperature Change: ${juneData[countJun][1]}°C`;
    });

    svg.selectAll('circle') //May
    .data(mayData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 201.5)')
    .append('title')
    .text(d => {
        countMay++;
        return `May ${mayData[countMay][2]}\nTemperature: ${mayData[countMay][0]}°C\nTemperature Change: ${mayData[countMay][1]}°C`;
    });

    svg.selectAll('circle') //April
    .data(aprilData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 222.7)')
    .append('title')
    .text(d => {
        countApr++;
        return `April ${aprilData[countApr][2]}\nTemperature: ${aprilData[countApr][0]}°C\nTemperature Change: ${aprilData[countApr][1]}°C`;
    });

    svg.selectAll('circle') //March
    .data(marchData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 21.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 243.2)')
    .append('title')
    .text(d => {
        countMar++;
        return `March ${marchData[countMar][2]}\nTemperature: ${marchData[countMar][0]}°C\nTemperature Change: ${marchData[countMar][1]}°C`;
    });

    svg.selectAll('circle') //February
    .data(februaryData)
    .enter()
    .append('rect')
    .attr('width', .9)
    .attr('height', 22.6)
    .attr('class', d => {
        if (d[0] < 4) {
            return 'lowest cell';
        } else if (d[0] >= 4 && d[0] < 5) {
            return 'slightlyLower cell';
        } else if (d[0] >= 5 && d[0] < 6) {
            return 'lower cell';
        } else if (d[0] >= 6 && d[0] < 7) {
            return 'low cell';
        } else if (d[0] >= 7 && d[0] < 8) {
            return 'lowHigh cell';
        } else if (d[0] >= 8 && d[0] < 9) {
            return 'high cell';
        } else if (d[0] >= 9 && d[0] < 10) {
            return 'higher cell';
        } else if (d[0] >= 10 && d[0] < 11) {
            return 'slightlyHigher cell'
        } else if (d[0] >= 11) {
            return 'highest cell';
        }
    })
    .attr('x', (d, i) => i * .9)
    .attr('transform', 'translate(100, 264.8)')
    .append('title')
    .text(d => {
        countFeb++;
        return `February ${februaryData[countFeb][2]}\nTemperature: ${februaryData[countFeb][0]}°C\nTemperature Change: ${februaryData[countFeb][1]}°C`
    });
    
    const yAxis = d3.scaleTime()
    .domain([new Date().setMonth(0), new Date().setMonth(12)])
    .range([250, 0]);
    
    svg.append('g')
    .attr('transform', 'translate(100, 37)')
    .attr('id', 'x-axis')
    .style('font-size', 15)
    .call(d3.axisLeft(yAxis)
    .ticks(12)
    .tickFormat(d3.timeFormat('%B')));
    
    const xAxis = d3.scaleLinear()
    .domain([1755, 2015])
    .range([0, 235]);
    
    svg.append('g')
    .attr('transform', 'translate(100, 288)')
    .attr('id', 'y-axis')
    .style('font-size', 10)
    .call(d3.axisBottom(xAxis)
    .ticks(5)
    .tickFormat(d3.format('')));

    const key = d3.scaleLinear() 
    .domain([4, 13])
    .range([0, 250]);
  
    svg.append('g')
    .attr('transform', 'translate(30, 352)')
    .attr('id', 'key')
    .call(d3.axisBottom(key)
    .tickFormat(d3.format('.1f')));
    
    svg.selectAll('circle') //key
    .data(keyData)
    .enter()
    .append('rect')
    .attr('transform', 'translate(29.5, 329.5)')
    .attr('width', 27.9)
    .attr('class', d => {
        switch (d) {
            case 4: return 'lowest';
            case 5: return 'slightlyLower';
            case 6: return 'lower';
            case 7: return 'lowHigh';
            case 8: return 'higher';
            case 9: return 'slightlyHigher';
            case 10: return 'high';
            case 11: return 'higher';
            case 12: return 'highest';
        }
    })
    .attr('height', 22)
    .attr('x', (d, i) => i * 27.9)
});

