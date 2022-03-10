export const beforeTimeMaker = (publish_time) => {
    const today = new Date();
    const timeValue = new Date(publish_time);
  
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
  
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
  
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 7) {
      return `${betweenTimeDay}일전`;
    }
    const betweenIimeWeek = Math.floor(betweenTimeDay / 7);
    if (betweenIimeWeek < 4) {
      return `${betweenIimeWeek}주전`;
    }
    const betweenIimeMonth = Math.floor(betweenIimeWeek / 4);
    if (betweenIimeMonth < 12) {
      return `${betweenIimeMonth}달전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };