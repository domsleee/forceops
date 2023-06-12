using System.Reactive.Disposables;
using static ForceOps.Test.TestUtil;

namespace ForceOps.Test;

public class ForceOpsMethodsTest : IDisposable
{
	List<IDisposable> disposables = new List<IDisposable>();
	ForceOpsContext forceOpsContext = new ForceOpsContext();
	FileAndFolderDeleter fileAndFolderDeleter;
	string tempFolderPath;

	[Fact]
	public void DeletingDirectoryOpenInCMDWindow()
	{
		var process = LaunchCMDInDirectory(tempFolderPath);
		disposables.Add(Disposable.Create(() =>
		{
			process?.Kill();
			process?.WaitForExit();
		}));

		forceOpsContext.maxRetries = 0;
		var exceptionWithNoRetries = Record.Exception(() => fileAndFolderDeleter.DeleteDirectory(new DirectoryInfo(tempFolderPath)));
		Assert.IsType<IOException>(exceptionWithNoRetries);
		Assert.StartsWith("The process cannot access the file", exceptionWithNoRetries.Message);
		forceOpsContext.maxRetries = 3;
		var exceptionWithDirectoryStrategy = Record.Exception(() => fileAndFolderDeleter.DeleteDirectory(new DirectoryInfo(tempFolderPath)));
		Assert.Null(exceptionWithDirectoryStrategy);
	}

	[Fact]
	public void DeletingFile()
	{
		var process = LaunchCMDInDirectory(tempFolderPath);
		var tempFilePath = GetTemporaryFileName();
		File.Open(tempFilePath, FileMode.OpenOrCreate);

		forceOpsContext.maxRetries = 0;
		var exceptionWithNoRetries = Record.Exception(() => fileAndFolderDeleter.DeleteFile(new FileInfo(tempFilePath)));
		Assert.IsType<IOException>(exceptionWithNoRetries);
		var ioException = exceptionWithNoRetries as IOException;
	}

	public ForceOpsMethodsTest()
	{
		tempFolderPath = GetTemporaryFileName();
		disposables.Add(CreateTemporaryDirectory(tempFolderPath));
		fileAndFolderDeleter = new FileAndFolderDeleter(forceOpsContext);
	}

	void IDisposable.Dispose()
	{
		foreach (var disposable in disposables.AsEnumerable().Reverse())
		{
			disposable.Dispose();
		}
	}
}