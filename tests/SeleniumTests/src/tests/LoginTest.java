package tests;

import static org.junit.Assert.*;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

	static WebDriver driver;

//	Change your selenium driver path here
	static String pathChromeDriver="C:\\Users\\Mason\\Desktop\\CS319\\Project\\myBranch\\g25\\tests\\chromedriver.exe";
	static String pathLoginPage="http://localhost:5000/HTML/mainMenu.html";
	static String pathClientPage="http://localhost:5000/HTML/client.html";

	String txtUsername="name";
	String btnClient="btnClient";
	String txtMessageLogin="name";
	String testName = "Mason";

	@BeforeClass
	public static void openBrowser()
	{
		System.setProperty("webdriver.chrome.driver", pathChromeDriver);
		driver= new ChromeDriver() ;
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	@AfterClass
	public static void closeBrowser() {
		driver.quit();
	}

	@Test
	public void nameLoadingSuccess() throws InterruptedException {
		driver.get(pathLoginPage);
		driver.manage().window().maximize();
		driver.findElement(By.id(txtUsername)).sendKeys(testName);

		Thread.sleep(500);
		driver.findElement(By.id(btnClient)).click();
		
		driver.get(pathClientPage);
		driver.manage().window().maximize();
		String strName=driver.findElement(By.id(txtMessageLogin)).getText();
		assertEquals("Failed test case", strName, testName);
	}

	@Test
	public void nameLoadingFailed() throws InterruptedException {
		driver.get(pathLoginPage);
		driver.manage().window().maximize();
		driver.findElement(By.id(txtUsername)).sendKeys("Matt");

		Thread.sleep(500);
		driver.findElement(By.id(btnClient)).click();
		
		driver.get(pathClientPage);
		driver.manage().window().maximize();
		String strName=driver.findElement(By.id(txtMessageLogin)).getText();
		assertNotEquals("Failed test case", strName, testName);
	}




}
