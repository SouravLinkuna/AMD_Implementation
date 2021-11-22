UPDATE SysPackage
SET InstallType = 0, IsChanged = 0, Maintainer = 'Customer'
where Name like 'AMD_Implementation';
