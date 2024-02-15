import { WorkHistory } from '@/interfaces/Candidates';

type TotalDiffTime = {
  years: number;
  months: number;
};

class DateService {
  public getTotalExperience(workHistory: WorkHistory[]): number {
    const totalMonths = workHistory.reduce((totalMonths, nextHistory) => {
      const { years, months } = this.getWorkTime(nextHistory);
      return totalMonths + months + years * 12;
    }, 0);

    return Math.floor(totalMonths / 12);
  }

  public getSortedHistory(workHistory: WorkHistory[]): WorkHistory[] {
    return workHistory.sort((firstHistory, secondHistory) => {
      const [firstDate, secondDate] = this.convertToDate(
        firstHistory.startDate,
        secondHistory.startDate
      );

      return secondDate.getFullYear() - firstDate.getFullYear();
    });
  }

  public getWorkTime(workHistory: WorkHistory): TotalDiffTime {
    const [startDate, endDate] = this.convertToDate(
      workHistory.startDate,
      workHistory.endDate
    );

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDay();

    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    const endDay = endDate.getDay();

    let totalYears = endYear - startYear;
    let totalMonths = endMonth - startMonth;

    if (totalMonths < 0) {
      totalMonths += 12;
    }

    if (endMonth < startMonth) {
      totalYears--;
    }

    if (startMonth === endMonth) {
      if (endDay > startDay) {
        totalYears--;
        totalMonths--;
      }
    }

    return {
      years: totalYears,
      months: totalMonths,
    };
  }

  private convertToDate(...dates: string[]): Date[] {
    return dates.map((time) => new Date(time));
  }
}

export const dateService = new DateService();
