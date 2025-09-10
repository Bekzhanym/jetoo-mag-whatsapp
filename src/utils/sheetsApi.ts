interface TestResult {
  name: string;
  whatsapp: string;
  age: string;
  score: number;
  correctAnswers: number;
  timestamp: string;
}

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

export const sendToGoogleSheets = async (data: TestResult): Promise<boolean> => {
  try {
    const params = new URLSearchParams({
      name: data.name,
      whatsapp: data.whatsapp,
      age: data.age,
      score: data.score.toString(),
      correctAnswers: data.correctAnswers.toString(),
      timestamp: data.timestamp
    });
    
    const url = `${GOOGLE_APPS_SCRIPT_URL}?${params.toString()}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
      });

      if (response.ok) {
        const result = await response.json();
        return result.success === true;
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (corsError) {
      // Если CORS не работает, используем no-cors
      await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
      });
      
      return true; // Предполагаем успех в no-cors режиме
    }
    
  } catch (error) {
    console.error('Ошибка при отправке данных:', error);
    return false;
  }
};

export const prepareTestData = (
  formData: { name: string; whatsapp: string; age: string },
  score: number,
  correctAnswers: number,
): TestResult => {
  return {
    name: formData.name,
    whatsapp: formData.whatsapp,
    age: formData.age,
    score,
    correctAnswers,
    timestamp: new Date().toISOString(),
  };
}; 