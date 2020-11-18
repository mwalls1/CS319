package tests;

import static org.junit.Assert.*;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LobbyBoardTest {

	static WebDriver driver;

//	Change your selenium driver path here
	static String pathChromeDriver="C:\\Users\\Mason\\Desktop\\CS319\\Project\\g25\\tests\\chromedriver.exe";
	static String pathLoginPage="http://localhost:5000/HTML/mainMenu.html";
	static String pathLobbyPage="http://localhost:5000/HTML/lobby.html";
	static String pathBoardPage="http://localhost:5000/HTML/board3.html";

	String txtUsername="name";
	String btnClient="btnClient";
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
		
		Thread.sleep(500);
		driver.get(pathLobbyPage);
		driver.manage().window().maximize();
		Thread.sleep(1000);
		String strName=driver.findElement(By.id("1")).getText();
		assertEquals("Failed test case", strName, testName);
		
		Thread.sleep(1000);
		driver.findElement(By.id("ready")).click();
		Thread.sleep(2000);
		strName=driver.findElement(By.id("1")).getText();
		assertEquals("Failed test case", strName, testName+". Current Space: 0. Current Score: 0");
		
	}

	@Test
	public void nameLoadingFailure() throws InterruptedException {
		driver.get(pathLoginPage);
		driver.manage().window().maximize();
		driver.findElement(By.id(txtUsername)).sendKeys("Matt");

		Thread.sleep(500);
		driver.findElement(By.id(btnClient)).click();
		
		Thread.sleep(500);
		driver.get(pathLobbyPage);
		driver.manage().window().maximize();
		Thread.sleep(1000);
		String strName=driver.findElement(By.id("1")).getText();
		assertNotEquals("Failed test case", strName, testName);
		
		Thread.sleep(1000);
		driver.findElement(By.id("ready")).click();
		Thread.sleep(2000);
		strName=driver.findElement(By.id("1")).getText();
		assertNotEquals("Failed test case", strName, testName+". Current Space: 0. Current Score: 0");
		
	}
	




}
